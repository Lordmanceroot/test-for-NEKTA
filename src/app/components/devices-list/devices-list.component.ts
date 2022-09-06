import {Component, OnDestroy, OnInit} from '@angular/core';
import {catchError, Subscription} from "rxjs";
import {FetchService} from "../../services/fetch.service";
import {body} from "../../mocks/body"
import {DeviceModel} from "../../models/device.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})

export class DevicesListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private bodyJson: string;
  private token: string;
  public devices!: DeviceModel[];

  constructor(private fetchService: FetchService,
              private router: Router,) {
    this.bodyJson = JSON.stringify(body)
    this.token = 'Bearer' + ' ' + localStorage.getItem('access_token')
  }

  ngOnInit(): void {
    const errorMessage = 'необходимо авторизироваться, сейчас вы окажетесь на странице авторизации'
    this.subscription = this.fetchService
      .getDevices(this.bodyJson, this.token)
      .pipe(
        catchError(err => {
          alert(`${err.error?.error?.msg}, ${errorMessage}` || errorMessage)
          localStorage.removeItem('access_token')
          this.router.navigate([''])
          throw 'error in source. Details: ' + (err.error?.error?.msg || 'Ошибка')
        })
      )
      .subscribe(device => {
      this.devices = device?.data?.metering_devices?.data || []
        if (!this.devices.length) {
          alert(`Похоже, ${errorMessage} `)
          this.router.navigate([''])
          localStorage.removeItem('access_token')
          throw 'error in source'
        }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
