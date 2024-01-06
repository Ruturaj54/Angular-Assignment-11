import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{


  iCnt : number = 0;

  constructor() { }

  CountCapital(Str : string)
  {
    for(var i = 0;i < Str.length;i++)
    {
      if(Str[i] >= 'A' && Str[i] <= "Z")
      {
        this.iCnt++;
      }
    }
    return this.iCnt;
  }

}
