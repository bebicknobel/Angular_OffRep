import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from "./child/child.component";
import { SimpleMessageComponent } from "./simple-message/simple-message.component";
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, HighlightDirective, FormComponent, ListComponent, ChildComponent,
            SimpleMessageComponent, HelloComponent,RouterLink,RouterLinkActive],
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

  company='Accenture';
  currDate = new Date();
  
  carNamesAPP:string []=[];

  onCarAdded(carName:string){
   
     console.log(carName,'From App');

      this.carNamesAPP.push(carName);
    } 

    itemsList=[
      {id:1,name:'Bebick'},
      {id:2,name:'Agatheesh'},
      {id:3,name:'Kunalan'},
      {id:4,name:'Kavin'},
      {id:5,name:'Simon'}
    ]
   
     playerName='Virat Kholi';

   showHello=true;
}
