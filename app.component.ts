import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => 
    {
      if (!(evt instanceof NavigationEnd)) 
      {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
