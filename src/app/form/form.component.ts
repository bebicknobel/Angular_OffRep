import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

constructor(private carService:CarService){}

    carName:string  ='';
  //sending value Outside using Output Decorator
  // @Output() carAdded =new EventEmitter<string>();
  onSubmit(){

    //console.log(this.carName);
    //this.carAdded.emit(this.carName);
    
    this.carService.addCarName(this.carName);
    this.carName='';

  }

  //Sending Vlaues using Service
    
}
