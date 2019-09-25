import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, OnInit, DoCheck,
                                    AfterContentInit, AfterContentChecked,
                                    AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private router: Router) {
    // console.log('app constructor console');
  }

  ngOnChanges() {
    // console.log('app ngOnChanges console');
  }

  ngOnInit() {
    // console.log('app ngOnInit console');
  }

  ngDoCheck() {
    // console.log('app ngDoCheck console');
  }

  ngAfterContentInit() {
    // console.log('app ngAfterContentInit console');
  }

  ngAfterContentChecked() {
    // console.log('app ngAfterContentChecked console');
  }

  ngAfterViewInit() {
    // console.log('app ngAfterViewInit console');
  }

  ngAfterViewChecked() {
    // console.log('app ngAfterViewChecked console');
  }

  ngOnDestroy() {
    // console.log('app ngOnDestroy console');
  }

  toHome() {
    this.router.navigate(['/home']);
  }

  toUser() {
    this.router.navigate(['/user']);
  }

}
