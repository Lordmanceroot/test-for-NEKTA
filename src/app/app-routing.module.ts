import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {DevicesListComponent} from "./components/devices-list/devices-list.component";
import {LocalStorageGuard} from "./guards/local-storage.guard";

const routes: Routes = [
  {path: 'devices-list', component: DevicesListComponent, canActivate: [LocalStorageGuard]},
  {path: '', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
