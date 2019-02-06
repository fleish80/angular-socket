import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { Data } from './data';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'socket-app';
  data: Data = {};
  outputs: Data[] = [];
  typing$: Observable<string>;
  subscription = new Subscription();

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.onChat();
    this.onTyping();
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  emitChat() {
    this.socketService.emitChat(this.data);
  }

  emitTyping() {
    this.socketService.emitTyping(this.data);
  }

  onChat() {
    this.subscription.add(
      this.socketService.onChat().subscribe((data: Data) => {
        this.outputs.push(data);
      })
    );
  }

  onTyping() {
    this.typing$ = this.socketService.onTyping();
  }
}
