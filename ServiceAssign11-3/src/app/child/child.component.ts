import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService,StringService]
})
export class ChildComponent 
{
  bRet : boolean = false;
  No1 : number = 2;
  No2 : number = 41;
  No3 : number = 4;
  Name : string = "Marvellous Infosystems";
  Num : number = 0;

  constructor(private obj : StringService,private obj1 : NumberService)
  {
    this.bRet = obj1.ChkPrime(this.No2);
    this.Num = obj.CountCapital(this.Name);
  }

}
