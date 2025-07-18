import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnChanges{

  @Input() items:any[]=[];

  @Input() players:string='';

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['items']){
       console.log("Items Property Changed",changes['items']);
    }

    if(changes['players']){
      console.log("Player Property Changed",changes['players']);
    }
  }

}
