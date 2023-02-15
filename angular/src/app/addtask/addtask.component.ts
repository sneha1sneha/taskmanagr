import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AddtaskService } from './addtask.service';
import { ToastrService } from 'ngx-toastr';
const log = new Logger('addtask');
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  errorObj!: boolean | false;
 
  addtaskError: boolean = false;
  isLoading: boolean = false;
  addtaskForm!: FormGroup;
  projectLists:any;
  employeeLists:any;
  constructor(private _addTaskService: AddtaskService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _toasterService :ToastrService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.projectList();
    this.employeeList();

  }

  projectList(){
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._addTaskService.getProjectList().subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.projectLists= response.data;
          debugger
        },
        (error) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Show the error
          this.errorObj = true
         
        } );
      }
  
      catch (error) {
        // Log the error
        log.error('tasklist() funtion ', error);
      }
  
  
  
  }




  employeeList(){
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._addTaskService.getEmployeeList().subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.employeeLists= response.data;
          debugger
        },
        (error) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Show the error
          this.errorObj = true
         
        } );
      }
  
      catch (error) {
        // Log the error
        log.error('tasklist() funtion ', error);
      }
  
  
  
  }
   



  addTask() {
    debugger
    console.log("addtask")
    try {
     
      // Check if the register form is valid
      if (this.addtaskForm.valid) {
       
        // Show the loading indicator
        this.isLoading = true;
        // Call the register service
        this._addTaskService.postAddTask(this.addtaskForm.value).subscribe(
          (response) => {
            // Hide the loading indicator
            this.isLoading = false;
            console.log('response', response);
            // Navigate to the home page
            
            this._toasterService.success("successfully added")
            this._router.navigate(['/tasklistadmin']);
          },
          (error) => {
            // Hide the loading indicator
            this.isLoading = false;
            // Show the error
            this.errorObj = true
            log.error('addatsk() funtion ', error);
           
          }
        );
      }
    } catch (error) {
      // Log the error
      log.error('addatsk() funtion ', error);
    }



  };


  private createForm() {
    this.addtaskForm = this.formBuilder.group({
      project_name: ['', Validators.required],
      task_name: ['', Validators.required],
      description: ['', Validators.required],
      planned_start_date: ['', Validators.required,],
      planned_end_date: ['', Validators.required],
      planned_budget: ['', Validators.required],
      username: ['', Validators.required],

      
    });




  }
}







