

import { Component, OnInit, ViewChild } from '@angular/core';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { Router } from '@angular/router';
import { TasklistadminService } from './tasklistadmin.service';
import { ToastrService } from 'ngx-toastr';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ButtonRendererComponent } from './button-renderer.component';
const log = new Logger('tasklist');
@Component({
  selector: 'app-tasklistadmin',
  templateUrl: './tasklistadmin.component.html',
  styleUrls: ['./tasklistadmin.component.scss']
})
export class TasklistadminComponent implements OnInit {
  errorObj!: boolean | false;
  taskLists: any;
  isLoading: boolean = false;
  frameworkComponents: any;
  id: any
  result: any
  private _router: any;
  public rowData: any;
  public rowData$!: Observable<any[]>;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  routerLink:any;
  constructor(private _taskListAdminService: TasklistadminService,
    private _toasterService: ToastrService,
    private router: Router

  ) {
    this.frameworkComponents = { 
      buttonRenderer: ButtonRendererComponent,
    }
    this.getTaskList();
  }


  onGridReady(params: GridReadyEvent) {
    
  }

  //  consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  //  Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  columnDefs = [
    { headerName: 'ID', field: 'id', width: 60 },
    { headerName: 'Task Name', field: 'task_name', filter: true, floatingFilter: true, width: 180 },
    { headerName: 'Description', field: 'description', filter: true, floatingFilter: true, width: 180 },
    { headerName: 'Project Name', field: 'project_name', filter: true, floatingFilter: true, width: 180 },
    { headerName: 'Employee Name', field: 'username', filter: true, floatingFilter: true, width: 180 },
    { headerName: 'Status', field: 'status_type', filter: true, floatingFilter: true, width: 180 },
    { headerName: 'Actions', field: 'button', 
    cellRenderer: 'buttonRenderer', 
    cellRendererParams: { onClick: this.editProduct.bind(this), 
      label: 'Edit' },width: 85 },
      { headerName: '', field: 'button', cellRenderer: 'buttonRenderer', 
      cellRendererParams: { onClick: this.delete.bind(this), label: 'Delete' 
    }, },
  
   ];




  ngOnInit(): void {
   

  }
  editProduct(row: any){
    
    this.id=row.rowData.id
   
    this.router.navigate([`/updateadmin/${this.id}`])
    
  }

  getTaskList() {
   
    // Show the loading indicator
    this.isLoading = true;
    try {
      // Call the getTasklist service
      this._taskListAdminService.getTaskListAdmin().subscribe(
        (response) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          // this.taskLists = response.data;
          this.rowData = response;
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



  delete(row: any) {
    // console.log("ent", id)

    // this.isLoading = true;
    alert("are u sure u want to delete")
    this._taskListAdminService.deletes(row.rowData.id).subscribe(
      (response) => {
        this.result = response.data
        console.log("result", this.result);
        this._toasterService.success("Deleted Successfully")
        window.location.reload();
        this._router.navigate(['/tasklist']);


      },
    )


  }


};
