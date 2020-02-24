import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// App Services
import { SessionService } from '../services/sessions/session.service';
import { OptionsService } from '../services/options/options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  show = false;
  userData = false;

  constructor(
    private session: SessionService,
    private router: Router,
    private options: OptionsService
  ) {}

  ngOnInit() {
    try {
      OptionsService.optionsShowEmitter.subscribe(show => {
        this.show = show;
      });
      this.userData = JSON.parse(this.session.get('userData'));
      if (this.userData) {
        this.show = true;
      }
    } catch (error) {
      this.show = false;
    }
  }

  logout() {
    this.session.clear();
    this.options.optionsChangeStatus(false);
    this.router.navigate(['/']);
  }
}
