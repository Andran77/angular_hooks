import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomComponent } from './hom/hom.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: HomComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
