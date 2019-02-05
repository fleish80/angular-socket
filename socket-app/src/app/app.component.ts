import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'socket-app';
  data: Data = {};

  constructor(private socketService: SocketService) {


    // emitChat() {
    //   const data: Data = {

    //   }
    // }

  }
}
