import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }
  sendMessage(mensaje) {
    const payload = {
      de: 'Tino',
      cuerpo: mensaje
    };
    this.wsService.emit('mensaje', payload);
  }
}
