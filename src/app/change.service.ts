import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  changes = false;

  constructor() { }

  getChange() {
    return this.changes;
  }

  setChange() {
    this.changes = !this.changes;
  }
}
