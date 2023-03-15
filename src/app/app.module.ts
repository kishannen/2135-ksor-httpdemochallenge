import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

import { HttpclientService } from './httpclient.service';
import { HttpclientComponent } from './httpclient/httpclient.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NewCmpComponent,
    HttpclientComponent,
  ],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
