import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialsService } from '@app/auth/credentials.service';
import { AuthenticationService } from '@app/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  userRole: number = 1;
  userName: string = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) { }

  ngOnInit() {
    this.userRole = this.credentialsService.getUserRole();
    this.userName = this.credentialsService.getUserName();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
