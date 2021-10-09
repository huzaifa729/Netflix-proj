import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExtComponent } from './ext/ext.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';

const appRoutes:Routes=[
  {path:'',component:ExtComponent},
   {path:'navbar',component:NavbarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExtComponent,
    MycontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
