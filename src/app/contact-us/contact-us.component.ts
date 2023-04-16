import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

@Injectable()
export class ContactUsComponent {

  telegram_bot_token = '5914449062:AAFEScIuuXN_mh6AA_txBaxjIgerEcaDtRo'
  channel_id = 'kerneliouscom'

  name = new FormControl('');
  mail = new FormControl('');
  message = new FormControl('');
  btn = "Send Message"
  clicked = false

  constructor(private http: HttpClient) {}

  send_message = () => {
    let message = `
    FROM: ${this.name.value}\n
    MAIL: ${this.mail.value}\n
    MESSAGE: ${this.message.value}\n
    `

    this.http.get(
        `https://api.telegram.org/bot${this.telegram_bot_token}/sendMessage?chat_id=@${this.channel_id}&text=${message}`
    ).subscribe((data) => {
        this.btn = "You're Message has been sent"

    })

  }

}
