import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TutorialsListComponent } from './home/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './home/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './home/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'home/tutorials', component: TutorialsListComponent },
  { path: 'home/tutorials/:id', component: TutorialDetailsComponent },
  { path: 'home/add', component: AddTutorialComponent },
];
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'home/tutorials/:id', component: HomeComponent
  //  children: [
   //   { path: '*', redirectTo: '', pathMatch: '' },
  //    { path: 'tutorials detail', component: TutorialDetailsComponent }
 //   ]
 // }
//];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
