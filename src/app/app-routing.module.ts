import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoRecepientComponent} from './video-recepient/video-recepient.component';
import {VideoCallerComponent} from './video-caller/video-caller.component';

const routes: Routes = [
  {
    path: 'seller',
    component: VideoRecepientComponent
  },
  {
    path: 'caller',
    component: VideoCallerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
