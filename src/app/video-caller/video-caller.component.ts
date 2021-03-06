import {Component, OnInit} from '@angular/core';
import {VideoCallManager} from '../services/video-call-manager.service';
import {VideoCallStateManagerService} from '../services/video-call-state-manager.service';
import {VideoCallWidgetComponent} from '../shared/video-call-widget/video-call-widget.component';

@Component({
  selector: 'app-video-caller',
  templateUrl: './video-caller.component.html',
  styleUrls: ['./video-caller.component.css'],
  providers: [VideoCallManager, VideoCallStateManagerService],
  viewProviders: [VideoCallWidgetComponent]
})
export class VideoCallerComponent implements OnInit {


  sessionId = '1_MX40NTg5NzI0Mn5-MTQ5ODIwODc1NzU0M354STByZDE0M080SEg0MzBCdXl2cFJWc2d-UH4';
  //valid until 25 August
  token = 'T1==cGFydG5lcl9pZD00NTg5NzI0MiZzaWc9YWViNTljN2MyMjBjOWNjNjExMzU2Yjc1NjE3OTc3MjZjNDkxMzk0ZTpzZXNzaW9uX2lkPTFfTVg0ME5UZzVOekkwTW41LU1UUTVPREl3T0RjMU56VTBNMzU0U1RCeVpERTBNMDgwU0VnME16QkNkWGwyY0ZKV2MyZC1VSDQmY3JlYXRlX3RpbWU9MTUwMDk3NDI0MyZub25jZT0wLjgwMjM2ODA4ODE4MDg5MDYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMzU2NjE1MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';


  constructor() {
  }

  ngOnInit() {
  }

}
