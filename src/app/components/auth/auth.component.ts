import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {FetchService} from "../../services/fetch.service";
import {AuthModel} from "../../models/auth.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  public form: FormGroup = new FormGroup({});
  private subscription: Subscription = new Subscription();
  public formData: AuthModel;


  constructor(private router: Router,
              private fetchService: FetchService) {
    this.formData = {email: "", password: ""}
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    this.formData.email = this.form.value.login;
    this.formData.password = this.form.value.password.split(' ').join('');
    this.formData.personal_data_access = true;

    this.subscription = this.fetchService
      .auth(this.formData)
      .subscribe((body) => {
        if (body?.data?.access_token) {
          localStorage.setItem('access_token', body.data.access_token)
          this.router.navigate(['/devices-list']);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}