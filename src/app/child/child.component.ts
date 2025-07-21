import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnChanges,OnInit,DoCheck{

  @Input() items:any[]=[];

  @Input() players:string='';

   messages:string='';

     shop:string='Trends'
  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['items']){
       console.log("Items Property Changed",changes['items']);
    }

    if(changes['players']){
      console.log("Player Property Changed",changes['players']);
    }
  }

  ngOnInit(): void {
    this.messages='Angular Project'
  }


  ngDoCheck(): void {
    console.log('Chhanges');
  }

}
