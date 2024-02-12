import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonasGroupComponent } from './personas-group/personas-group.component';

@NgModule({
  declarations: [AppComponent, PersonasComponent, PersonasGroupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
