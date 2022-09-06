import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FetchService} from "../../services/fetch.service";
import {body} from "../../mocks/body"
import {DeviceModel} from "../../models/device.model";

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

  constructor(private fetchService: FetchService) {
    this.bodyJson = JSON.stringify(body)
    this.token = 'Bearer' + ' ' + localStorage.getItem('access_token')
  }

  ngOnInit(): void {
    this.subscription = this.fetchService.getDevices(this.bodyJson, this.token).subscribe(device => {
      this.devices = device.data.metering_devices.data
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
