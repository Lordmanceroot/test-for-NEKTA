import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthModel, ResponseAuthModel} from "../models/auth.model";
import {ResponseDevices} from "../models/device.model";


@Injectable()
export class FetchService {

  constructor(private http: HttpClient) {
  }

  auth(body: AuthModel): Observable<ResponseAuthModel> {
    return this.http.post<ResponseAuthModel>('https://core.nekta.cloud/api/auth/login', body);
  }


  getDevices(body: string, authorization: string): Observable<ResponseDevices> {
    return this.http.post<ResponseDevices>('https://core.nekta.cloud/api/device/metering_devices', body, {headers: {authorization}});
  }

}
