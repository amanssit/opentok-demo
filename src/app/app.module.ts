import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {OpentokModule} from 'ng2-opentok';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoadingComponent} from './shared/loading/loading.component';
import {VideoCallWidgetComponent} from './shared/video-call-widget/video-call-widget.component';
import {VideoCallerComponent} from './video-caller/video-caller.component';
import {VideoRecepientComponent} from './video-recepient/video-recepient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    VideoCallWidgetComponent,
    VideoCallerComponent,
    VideoRecepientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    OpentokModule.forRoot({apiKey: '45897242'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
