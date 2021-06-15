import { Component, OnInit } from '@angular/core';
import { DeveloperServiceService } from '../developer-service.service';
import { DeveloperDetails } from '../developer-details';



@Component({
  selector: 'app-all-developers',
  templateUrl: './all-developers.component.html',
  styleUrls: ['./all-developers.component.css']
})
export class AllDevelopersComponent implements OnInit {

  __developerService:DeveloperServiceService;
  unitsInfee:number = 0; 
  

 constructor(ps:DeveloperServiceService) { 
   this.__developerService = ps;
 }

 ngOnInit(): void {
  }

  getAllDevelopers():DeveloperDetails[]
  {
    return this.__developerService.getAllDevelopers();
  }

  submit()
  {
    
    console.log(this.submit);
  }

}
