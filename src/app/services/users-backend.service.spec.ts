import { TestBed, inject } from '@angular/core/testing';

import { UsersBackendService } from './users-backend.service';

describe('UsersBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersBackendService]
    });
  });

  it('should be created', inject([UsersBackendService], (service: UsersBackendService) => {
    expect(service).toBeTruthy();
  }));
});
