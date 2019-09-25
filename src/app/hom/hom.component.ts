import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnChanges, OnInit, DoCheck,
                                    AfterContentInit, AfterContentChecked,
                                    AfterViewInit, AfterViewChecked, OnDestroy {

  someText = 'Hello everyone!';

  constructor() {
    console.log('home constructor console');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'home ngOnChanges console');
  }

  ngOnInit() {
    console.log('home ngOnInit console');
  }

  ngDoCheck() {
    console.log('home ngDoCheck console');
  }

  ngAfterContentInit() {
    console.log('home ngAfterContentInit console');
  }

  ngAfterContentChecked() {
    console.log('home ngAfterContentChecked console');
  }

  ngAfterViewInit() {
    console.log('home ngAfterViewInit console');
  }

  ngAfterViewChecked() {
    console.log('home ngAfterViewChecked console');
  }

  ngOnDestroy() {
    console.log('home ngOnDestroy console');
  }

}
