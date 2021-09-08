import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none and native 
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string}; //send data through Input decorator that make the property accessible to the parent 
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  @Input() passedToChild = "";
  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log("CHANGES:", changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log("Text Content: ", this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!'); //it gets called whenever angular checks for any changes, 
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!'); //it's called once, it doesn't get initalised again. It checks the ng-content 
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called'); //it's called after each change detaction cycle
  }

  ngAfterViewInit() { //it gives you access to the template elements, you can access them and use their values. Before this hook
    //has not been reached you can't do that, yu can't check the value of some elements in your dom because it's not been rendered yet.
    //it's like the "mounted" in Vue
    console.log('ngAfterViewInit called');
    console.log("Text Content: ", this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called'); //it's called after the content has been checked 
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }




}
