import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGitComponent } from './login-git.component';

describe('LoginGitComponent', () => {
  let component: LoginGitComponent;
  let fixture: ComponentFixture<LoginGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
