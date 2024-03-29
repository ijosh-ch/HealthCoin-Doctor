import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QRCodeModule} from 'angularx-qrcode';
import {RecordListComponent} from './pages/record-list/record-list.component';
import {WriteRecordComponent} from './pages/write-record/write-record.component';
import {ReadRecordComponent} from './pages/read-record/read-record.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecordListComponent,
    WriteRecordComponent,
    ReadRecordComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
