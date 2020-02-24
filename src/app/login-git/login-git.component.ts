import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// App Services.
import { GitActionsService } from '../services/git-actions/git-actions.service';
import { SessionService } from '../services/sessions/session.service';
import { OptionsService } from '../services/options/options.service';


@Component({
  selector: 'app-login-git',
  templateUrl: './login-git.component.html',
  styleUrls: ['./login-git.component.scss']
})
export class LoginGitComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private gitAction: GitActionsService,
    private session: SessionService,
    private router: Router,
    private options: OptionsService
  ) { }

  loadingData = false;
  host: string = window.location.hostname;
  clienteIdList: any = {
    'localhost': {
      client_id: '3a8e081b8960df638bca'
    },
    'tiagodesouzasantos.github.io': {
      client_id: 'cc5d6a52910648e97389'
    }
  };

  ngOnInit(): void {
    this.loadingData = false;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']) {
        this.loadingData = true;
        this.gitAction.validateSession(params['code']).subscribe(validResult=>{
          if (validResult.error != 'bad_verification_code') {
            this.gitAction.getUserData(validResult.access_token).subscribe(userResult => {
              this.session.set('token', validResult.access_token);
              this.session.set('userData', JSON.stringify(userResult));
              this.loadingData = false;
              this.options.optionsChangeStatus(true);
              this.router.navigate(['/repositories']);
            });
          } else {
            this.loadingData = false;
          }
        });
      }
    });
  }

}
