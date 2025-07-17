import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_FirstApp';


  constructor() {}

  name:string ='';

  countval=0
  countInc(){
  
   this.countval++;
  }

  countDec(){
    if(this.countval <=0 ){     
      this.countval;
    }
    else{
      this.countval--;
    }
    
  }

   fruits= ['Apple','Orange','Mango','PineApple'];

  showMe=false;

  applyColor=false;
}
