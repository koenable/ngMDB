import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommunityComponent } from './components/community/community.component';
import { AuthComponent } from './components/auth/auth.component';


// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'community', component: CommunityComponent},
  { path: 'auth', component:AuthComponent}


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
