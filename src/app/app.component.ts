import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Quote } from './quote';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Idezet';

  constructor(public auth: AuthService){}
  
}
