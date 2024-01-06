import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{

  constructor() { }

  Add(Var1 : number,Var2 : number)
  {
    return Var1 + Var2;

  }

  Sub(Var1 : number,Var2 : number)
  {
    return Var1 - Var2;

  }
}
