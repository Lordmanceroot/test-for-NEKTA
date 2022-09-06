import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageGuard implements CanActivate {
  canActivate(): boolean {
    const loggedIn = localStorage.getItem('access_token');
    return !!loggedIn;
  }
}
