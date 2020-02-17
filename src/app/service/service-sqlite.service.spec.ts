import { TestBed } from '@angular/core/testing';

import { ServiceSQLiteService } from './service-sqlite.service';

describe('ServiceSQLiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSQLiteService = TestBed.get(ServiceSQLiteService);
    expect(service).toBeTruthy();
  });
});
