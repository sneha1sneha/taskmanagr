import { Component, OnInit, ViewChild } from '@angular/core';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { Router } from '@angular/router';
import { TasklistuserService } from './tasklist-user.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ButtonRendererComponent } from './button-renderer.component';
const log = new Logger('tasklist');

@Component({
  selector: 'app-tasklist-user',
  templateUrl: './tasklist-user.component.html',
  styleUrls: ['./tasklist-user.component.scss']
})
export class TasklistUserComponent implements OnInit {
  errorObj!: boolean | false;
  tasklists: any;
  frameworkComponents: any;
  isLoading: boolean = false;
  id: any
 
  public rowData:any;
  public rowData$!: Observable<any[]>;
  private _router: any;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  constructor(private _tasklistuserService: TasklistuserService,private router: Router) {

    this.frameworkComponents = { 
      buttonRenderer: ButtonRendererComponent,
    }
  this.getTasklist();
   }

   onGridReady(params: GridReadyEvent) {

   
  }
 
 
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
 
// using grid api
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  columnDefs= [
    { headerName: 'ID', field: 'id' ,width: 90},
    { headerName: 'Task Name', field: 'task_name', filter: true, floatingFilter: true ,width: 250  },
    { headerName: 'Description', field: 'description',filter: true, floatingFilter: true,width: 250 },
    { headerName: 'Project Name', field: 'project_name' ,filter: true, floatingFilter: true ,width: 250  },
    { headerName: 'Status', field: 'status_type' ,filter: true, floatingFilter: true,width: 250 },
    { headerName: 'Action', field: 'button', 
    cellRenderer: 'buttonRenderer', 
    cellRendererParams: { onClick: this.editProduct.bind(this), 
      label: 'Edit' },width: 250 }
  
  
     
   


  ];


  ngOnInit(): void {
  }

  editProduct(row: any){
    
    this.id=row.rowData.id
   
    this.router.navigate([`/updatetask/${this.id}`])
    
  }


  getTasklist() {
    
    this.isLoading = true;
    try {
      // Call the tasklistService service
      this._tasklistuserService.getTasklist().subscribe(
        (response) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          // this.tasklists = response.data;
          this.rowData=response;
          debugger
        },
        (error) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Show the error
          this.errorObj = true

        });
    }

    catch (error) {
      // Log the error
      log.error('tasklist() funtion ', error);
    }



  }
// call the logout function
logout() 
{
  console.log("logout")
  sessionStorage.removeItem('_app_cache')
  this._router.navigate(['/login'])
}



}


