import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(var1 : number)
  {
    var flag : number = 0;
    
    
    for(var i = 2;i <= var1/2;i++)
    {
      if(var1 == 2)
      {
        flag = 0;
        return true;
        break;
      }
      if(var1 % i == 0)
      {
        flag = 1;
      }
      
    }
    if(flag == 1)
    {
      return false;
    }
    else
    {
      return true;
    }

  }
}
