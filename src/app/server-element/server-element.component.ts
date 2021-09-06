import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; //send data through Input decorator that make the property accessible to the parent 

  @Input() passedToChild = "";
  constructor() { }

  ngOnInit(): void {
  }

}
