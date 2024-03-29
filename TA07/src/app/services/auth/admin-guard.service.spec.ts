import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdminGuardService } from './admin-guard.service';

describe('AdminGuardService', () => {
  let service: AdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule ]
    });
    service = TestBed.inject(AdminGuardService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('role be created', () => {
    const role = window.sessionStorage.getItem("auth-role");
    expect(role).toBeNull();
  });

});
