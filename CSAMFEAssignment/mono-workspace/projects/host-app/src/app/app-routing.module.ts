import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE_APP2_URL = "http://localhost:4400/remoteEntry.js";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'my-insurance-details',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: "mfeApp",
        exposedModule: "./MyInsuranceDetailsModule"
      }).then(m => m.MyInsuranceDetailsModule).catch(err => console.log(err));
    }
  },
  {
    path: 'pay-premium',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP2_URL,
        remoteName: "mfeApp2",
        exposedModule: "./PayPremiumModule"
      }).then(m => m.PayPremiumModule).catch(err => console.log(err));
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [HomeComponent];
