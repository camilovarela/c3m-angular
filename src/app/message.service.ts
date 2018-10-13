import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Message } from './dto/message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MessageService {

  private watsonUrl = 'http://localhost:8080/watson/chatbot/message';

  constructor(
    private http: HttpClient) { }

  sendMessage(message: string): Observable<Message> {
    return this.http.post<Message>(this.watsonUrl, message, httpOptions);
  }
}