import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/auth/credentials.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  userRole: number = 1;
  constructor(private _credentialService: CredentialsService,) { }

  ngOnInit() {
    debugger
    this.userRole = this._credentialService.getUserRole();
    console.log("this.userRole", this.userRole)
  }
}
