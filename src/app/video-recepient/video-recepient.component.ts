import {Component, OnInit} from '@angular/core';
import {VideoCallManager} from '../services/video-call-manager.service';
import {VideoCallStateManagerService} from '../services/video-call-state-manager.service';
import {VideoCallWidgetComponent} from '../shared/video-call-widget/video-call-widget.component';

@Component({
  selector: 'app-video-recepient',
  templateUrl: './video-recepient.component.html',
  styleUrls: ['./video-recepient.component.css'],
  providers: [VideoCallManager, VideoCallStateManagerService],
  viewProviders: [VideoCallWidgetComponent]
})
export class VideoRecepientComponent implements OnInit {
  sessionId = '1_MX40NTg5NzI0Mn5-MTQ5ODIwODc1NzU0M354STByZDE0M080SEg0MzBCdXl2cFJWc2d-UH4';
  //valid until 25 August
  token = 'T1==cGFydG5lcl9pZD00NTg5NzI0MiZzaWc9NmZjZDdiM2M4NDc2YTA5NTYyYjI4NWQ4NWUwNWE0MjBmNjA5N2IxMzpzZXNzaW9uX2lkPTFfTVg0ME5UZzVOekkwTW41LU1UUTVPREl3T0RjMU56VTBNMzU0U1RCeVpERTBNMDgwU0VnME16QkNkWGwyY0ZKV2MyZC1VSDQmY3JlYXRlX3RpbWU9MTUwMDk3NDg1OCZub25jZT0wLjg4OTk1NjY5OTczODkzNzkmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMzU2Njc2OCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

  constructor() {
  }

  ngOnInit() {
  }

}
