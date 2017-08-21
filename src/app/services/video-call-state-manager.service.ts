import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export const enum VideoCallStates {
  noCall,
  incomingCall,
  calling,
  callStarted,
  callHungUpByOther
}

@Injectable()
export class VideoCallStateManagerService {

  private _state: Subject<number> = new Subject<number>();

  getStateChange(): Observable<number> {
    return this._state.asObservable();
  }

  changeState(newState: number) {
    this._state.next(newState);
  }

}
