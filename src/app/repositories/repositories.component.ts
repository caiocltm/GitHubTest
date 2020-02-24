import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// App Services.
import { GitActionsService } from '../services/git-actions/git-actions.service';
import { SessionService } from '../services/sessions/session.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  userData: any = false;
  loadingData = false;
  repos: any = [];

  constructor(
    private gitactions: GitActionsService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    try {
      this.loadingData = true;
      this.userData = JSON.parse(this.session.get('userData'));
      this.gitactions.getUserRepo(this.userData.login).subscribe(userRepos => {
        this.repos = userRepos;
        this.loadingData = false;
      });
    } catch (error) {
      if (!this.userData) {
        this.router.navigate(['/']);
      }
    }
  }

}
