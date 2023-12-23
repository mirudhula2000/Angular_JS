import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SquareComponent } from './components/square/square.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
   {path:'',component:HomeComponent,title:'Home'},
   {path:'menu',component:MenuComponent,title:'Menu'},
   {path:'square',component:SquareComponent,title:'Square'},
   {path:'contact',component:ContactComponent,title:'Contact'},

   
   
   

];
