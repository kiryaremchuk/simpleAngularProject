import { TestBed } from '@angular/core/testing';

import { DataopeatorService } from './dataopeator.service';

describe('DataopeatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataopeatorService = TestBed.get(DataopeatorService);
    expect(service).toBeTruthy();
  });
});
