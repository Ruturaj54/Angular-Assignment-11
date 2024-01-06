import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
  bRet : boolean = false;
  No1 : number = 2;
  No2 : number = 41;
  No3 : number = 4;

  constructor(private obj : NumberService)
  {
    this.bRet = obj.ChkPrime(this.No2);
  }


}
