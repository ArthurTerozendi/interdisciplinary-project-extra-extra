import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "chat",
    loadChildren: () => import("./pages/chat/chat.module").then(m => m.ChatModule)
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "profile",
    loadChildren: () => import ("./pages/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: "",
    redirectTo: "chat",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
