import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// GitHub-Test Components.
import { AppComponent } from './app.component';
import { LoginGitComponent } from './login-git/login-git.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { OptionsComponent } from './options/options.component';

// Styling Icons (Font Awesome).
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

@NgModule({
  declarations: [
    AppComponent,
    LoginGitComponent,
    RepositoriesComponent,
    LoadingScreenComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
