import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges, OnInit, DoCheck,
                                    AfterContentInit, AfterContentChecked,
                                    AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() myText: string;

  viewChildText = 'Text for viewchild in user(child) component';

  constructor() {
    console.log('user constructor console');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'user ngOnChanges console');
  }

  ngOnInit() {
    console.log('user ngOnInit console');
  }

  ngDoCheck() {
    console.log('user ngDoCheck console');
  }

  ngAfterContentInit() {
    console.log('user ngAfterContentInit console');
  }

  ngAfterContentChecked() {
    console.log('user ngAfterContentChecked console');
  }

  ngAfterViewInit() {
    console.log('user ngAfterViewInit console');
  }

  ngAfterViewChecked() {
    console.log('user ngAfterViewChecked console');
  }

  ngOnDestroy() {
    console.log('user ngOnDestroy console');
  }
}
