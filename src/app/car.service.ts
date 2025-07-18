import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  private carNamesSubject=new BehaviorSubject<string[]>([]);
   carNames$=this.carNamesSubject.asObservable();

   addCarName(name:string){

       const currentValue=  this.carNamesSubject.getValue();
       const updatedValue=[...currentValue,name];
       this.carNamesSubject.next(updatedValue);
   }

}
