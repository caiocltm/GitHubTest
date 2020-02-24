import { TestBed } from '@angular/core/testing';

import { GitActionsService } from './git-actions.service';

describe('GitActionsService', () => {
  let service: GitActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
