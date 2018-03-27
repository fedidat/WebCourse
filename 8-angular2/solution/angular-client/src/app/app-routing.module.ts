import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SigninComponent }   from './signin/signin.component';
import { SignupComponent }      from './signup/signup.component';
import { MainchatComponent }  from './mainchat/mainchat.component';
import { LogoutComponent } from './logout/logout.component' 
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainchat', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'mainchat', component: MainchatComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'room/:id', component: PostsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}