import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none and native 
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string}; //send data through Input decorator that make the property accessible to the parent 

  @Input() passedToChild = "";
  constructor() { 

  }

  ngOnInit(): void {
 
  }

}
