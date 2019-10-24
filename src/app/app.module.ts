import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactEffects } from './effects/contact.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './reducers/contact.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([ContactEffects]),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      contact: reducer
    }),
    StoreDevtoolsModule.instrument() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
