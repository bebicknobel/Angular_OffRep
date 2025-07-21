import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements AfterViewInit,OnInit,OnDestroy{

  @ViewChild('nameInput') nameInputs!:ElementRef
 
  //Focus the input once the View is Initialized
  ngAfterViewInit(): void {
    
    this.nameInputs.nativeElement.focus();
    console.log('Input Focused');
  }

   counter:number=0;
   private intervalId:any;
  // showMe=true;

   //Starts the Timer 
  ngOnInit(): void {
    
   this.intervalId= setInterval(()=>{
      
          this.counter++;

    },1000);
    console.log('Interval Id :',this.intervalId);
  }

  //Clear the Timer
  ngOnDestroy(): void {
 
      clearInterval(this.intervalId);
      console.log('onDestroy Timer Stopped');
  }


}
