import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent
  },
  {
    path: "general-info",
    loadChildren: () => import("./pages/general-info/general-info.module").then(m => m.GeneralInfoModule)
  },
  {
    path: "security",
    loadChildren: () => import("./pages/security/security.module").then(m => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
