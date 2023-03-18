import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotes: Array<Quote> =new Array<Quote>();

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    db.list<Quote>('quotes').valueChanges().subscribe(t => {
      this.quotes = t
    })
   }

   create(quote:Quote){
    this.db.list('quotes').push(quote);


   }

   getUser() {
    return this.afAuth.authState;
  }

}
