import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  openChat() {
    this.router.navigateByUrl("chat");
  }
  openProfile() {
    this.router.navigateByUrl("profile/general-info");
  }
  openLogout() {
    this.router.navigateByUrl("login");
  }
}
