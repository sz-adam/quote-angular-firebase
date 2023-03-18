import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from '../auth.service';
import { Quote } from '../quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  quote: Array<Quote> = new Array<Quote>()

  actualtitle: string = ''
  actualauthor: string = ''
  constructor(public auth: AuthService, public service: QuotesService, public db: AngularFireDatabase,) {
    auth.protectContent()
    db.list<Quote>('quotes').valueChanges().subscribe(t => {
      this.quote = t;
    })
  }

  add() {
    let m = new Quote();
    m.title = this.actualtitle;
    m.author = this.actualauthor;
    m.userName = this.auth.currentUser()
    this.db.list<Quote>('quotes').push(m);
    this.actualtitle = '';
    this.actualauthor = '';
  }
}
