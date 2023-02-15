import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeu',
  templateUrl: './homeu.component.html',
  styleUrls: ['./homeu.component.scss']
})
export class HomeuComponent implements OnInit {
 

  constructor(private _router: Router,) {
    
   }

  ngOnInit(): void {
 
   
 
  }

  logout() 
  {
    console.log("logout")
    sessionStorage.removeItem('_app_cache')
    this._router.navigate(['/login'])
  }



}



