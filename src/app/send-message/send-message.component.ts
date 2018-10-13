import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Message } from '../dto/message';

@Component({
  selector: 'watson-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: [ './send-message.component.css' ]
})
export class SendMessageComponent implements OnInit {

  watsonResponse: Message;

  constructor(private messageService: MessageService) {}

  sendMessage(message: string) {
    this.messageService.sendMessage(message).subscribe(result => this.watsonResponse = result);
  }

  ngOnInit(): void {
  }
}
