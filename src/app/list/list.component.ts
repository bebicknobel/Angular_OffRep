import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

   //@Input()  carNames:string []=[];//['Ford','Wallswagen','Kia sonet','Ferrari'];

      carNames:string []=[];
      
      constructor(private carService:CarService){}

   ngOnInit(): void {
     
       this.carService.carNames$.subscribe((name)=>{

           this.carNames=name;
       });
   }
}
