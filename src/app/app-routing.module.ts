import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Components.
import { RepositoriesComponent } from './repositories/repositories.component';
import { LoginGitComponent } from './login-git/login-git.component';

const routes: Routes = [
  { path: '', component: LoginGitComponent },
  { path: 'login-git', component: LoginGitComponent },
  { path: 'repositories', component: RepositoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
