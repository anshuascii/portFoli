import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {SkillsComponent} from './skills/skills.component'
import {ProjectsComponent} from './projects/projects.component'
import {ContactsComponent} from './contacts/contacts.component'


const routes: Routes =[

{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'skills',component:SkillsComponent},
{path:'projects',component:ProjectsComponent},
{path:'contacts',component:ContactsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
