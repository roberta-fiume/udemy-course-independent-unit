import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) { //nameInput is the parameter for the reference #serverNameInput passed as argument in the template file
    console.log("server content input ",this.serverContentInput);
    // console.log("input value", nameInput.value);
    // this.serverCreated.emit({
    // serverName: this.newServerName,
    //   serverName: nameInput.value,
    //   serverContent: this.newServerContent
    // })

      this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
      console.log(this.serverContentInput);
      // this.blueprintCreated.emit({
      // serverName: this.newServerName,
      // serverName: nameInput.value,
      // serverContent: this.newServerContent
      // })

      this.blueprintCreated.emit({
        // serverName: this.newServerName,
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

}
