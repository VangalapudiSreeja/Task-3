import { DeveloperDetails } from './developer-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloperServiceService {

  constructor() { }


getAllDevelopers(): DeveloperDetails[] 
{
  let developer1 : DeveloperDetails = {  
      DevName : 'Sreeja',
      DevId  : 101,
      Accuracy:3,
      SkillLevel:'Expert',
      Email:'sree@gmail.com',
      mobile: '9876543210'
      
  }
  let developer2 : DeveloperDetails = {  
      DevName : 'Sony',
      DevId  : 102,
      Accuracy:4,
      SkillLevel:'Intermediate',
      Email:'sony@gmail.com',
      mobile: '9578999987'

      
    }
    return [developer1, developer2];
  
  }
}
      
  
