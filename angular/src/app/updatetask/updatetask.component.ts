import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { UpdatetaskService } from './updatetask.service'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
const log = new Logger('updatetask');
@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.scss']
})
export class UpdatetaskComponent implements OnInit {
  updateTasks:any;
  isLoading: boolean = false;
  id:any
  task_id:any
  errorObj!: boolean | false;
  updateForm!:FormGroup;
  tasks:any
  
  constructor(private _updateTaskService:UpdatetaskService,
    private _router: Router,
    private route: ActivatedRoute,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _toasterService :ToastrService
    ) {
   
      this.createForm();
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTask(this.id);
   
    // this.updatetask();
  }




getTask(id:any){
 
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._updateTaskService.getTasks(id).subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.tasks= response.data;
          console.log(this.tasks[0])
          this.updateForm.patchValue({
            task_name:this.tasks[0].task_name,
            project_name:this.tasks[0].project_name,
            description:this.tasks[0].description,
            status_type:this.tasks[0].status_type
          })
         
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






  updateTask(id:any) {
    console.log(id)
     // Show the loading indicator
     try {
      // Check if the register form is valid
      if (this.updateForm.valid) {
        // Show the loading indicator
        this.isLoading = true;
        // Call the register service
        this._updateTaskService.getUpdateTask(id,this.updateForm.value).subscribe(
          (response) => {
            // Hide the loading indicator
            this.isLoading = false;
            console.log('response', response.data.affectedRows==1);
            this._toasterService.success("Updated susceesfully")
            // Navigate to the home page
           this._router.navigate(['/tasklistuser']);
          },
          (error) => {
            // Hide the loading indicator
            this.isLoading = false;
            // Show the error
            this.errorObj = true
            log.error('login() funtion ', error);
          }
        );
      }
    } catch (error) {
      // Log the error
      log.error('Update() funtion ', error);
    }





}
private createForm() {
  this.updateForm = this.formBuilder.group({
    project_name: ['', Validators.required],
    task_name: ['', Validators.required],
    description: ['', Validators.required],
    status_type: ['', Validators.required],

    
  });




}





logout() 
  {
    console.log("logout")
    sessionStorage.removeItem('_app_cache')
    this._router.navigate(['/login'])
  }

}
