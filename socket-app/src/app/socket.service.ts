import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {}

  emitChat(data: Data) {
    this.socket.emit('chat', {
      handle: data.handle,
      message: data.message
    });
  }

  emitTyping(data: Data) {
    this.socket.emit('typing', data.handle);
  }

  onChat(): Observable<Data> {
    return this.socket.fromEvent<Data>('chat');
  }

  onTyping(handle): Observable<string> {
    return this.socket.fromEvent<string>('typing');
  }
}
