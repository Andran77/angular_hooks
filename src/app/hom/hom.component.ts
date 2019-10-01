import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnChanges, OnInit, DoCheck,
                                    AfterContentInit, AfterContentChecked,
                                    AfterViewInit, AfterViewChecked, OnDestroy {

  someText = 'Hello everyone!';
  seeChildText = '';
  viewChange = false;

  @ViewChild(UserComponent) user: UserComponent;

  constructor() {
    console.log('home constructor console');
    console.log(this.user, 'this user in construct');
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
    setTimeout(() => {
      console.log(this.user, 'this user in construct home ngAfterViewInit console');
      this.viewChange = true;
      this.seeChildText = this.user.viewChildText;
    }, 2000);
  }

  ngAfterViewChecked() {
    console.log('home ngAfterViewChecked console');
  }

  ngOnDestroy() {
    console.log('home ngOnDestroy console');
  }

}
