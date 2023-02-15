
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';

const log = new Logger('register');

@UntilDestroy()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  errorObj!: boolean | false;

  registerError: boolean = false;
  isLoading: boolean = false;
  registerForm!: FormGroup
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private _toasterService: ToastrService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  register() {
    console.log("register")
    try {
      // Check if the register form is valid
      if (this.registerForm.valid) {
        // Show the loading indicator
        this.isLoading = true;
        // Log the form data
        console.log('this.registerForm.valid', this.registerForm.value);
        // Call the register service
        this.authenticationService.register(this.registerForm.value).subscribe(
          (response) => {
            // Hide the loading indicator
            if (response?.data?.status == 200) {

              this.isLoading = false;
              this._toasterService.success("Registered Succesfully")
              this._router.navigate(['/login']);
            }
            else {
              this.isLoading = false;
              this._toasterService.error("Username already in use")
            }
            console.log('response', response);
            // Navigate to the home page

          },
          (error) => {
            // Hide the loading indicator
            this.isLoading = false;
            // Show the error
            this.errorObj = true
            log.error('register() funtion ', error);
          }
        );
      }
    } catch (error) {
      // Log the error
      log.error('register() funtion ', error);
    }



  };


  private createForm() {
    this.registerForm = this.formBuilder.group({



      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/)]],
      email: ['', Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],

    });

  }
}
