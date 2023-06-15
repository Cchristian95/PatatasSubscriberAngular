import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListSubscriberComponent } from './views/list-subscriber/list-subscriber.component';
import { EditSubscriberComponent } from './views/edit-subscriber/edit-subscriber.component';
import { CreateSubscriberComponent } from './views/create-subscriber/create-subscriber.component';
import { DeleteSubscriberComponent } from './views/delete-subscriber/delete-subscriber.component';

const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'list-subscriber', component:ListSubscriberComponent },
  { path:'edit-subscriber', component:EditSubscriberComponent },
  { path:'create-subscriber', component:CreateSubscriberComponent },
  { path:'delete-subscriber', component:DeleteSubscriberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,ListSubscriberComponent,EditSubscriberComponent,CreateSubscriberComponent,DeleteSubscriberComponent]