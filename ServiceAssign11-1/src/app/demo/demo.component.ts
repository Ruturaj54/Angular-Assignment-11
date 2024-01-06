import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
  public No1 : number = 200;
  public No2 : number = 100;
  public SumAns : number = 0;
  public SubAns : number = 0;

  constructor(private obj : ArithmeticService)
  {
    this.SumAns = obj.Add(this.No1,this.No2);
    this.SubAns = obj.Sub(this.No1,this.No2);
  }

}
