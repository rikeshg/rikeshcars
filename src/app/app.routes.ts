import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallUsComponent } from './call-us/call-us.component';
import { LocationsComponent } from './locations/locations.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
{path:"Home", component: HomeComponent},
{path:"Call Us", component: CallUsComponent},
{path:"Locations",component:LocationsComponent},
{path:"Signup",component:SignupComponent},
];
