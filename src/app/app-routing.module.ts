import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { ClasssComponent } from './classs/classs.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'chat', component:ChatComponent},
  {path:'class', component:ClasssComponent},
  {path:'learning', component:LearningPlanComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'settings', component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
