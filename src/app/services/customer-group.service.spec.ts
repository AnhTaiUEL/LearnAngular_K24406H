import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CustomerGroupService } from './customer-group.service';

describe('CustomerGroupService', () => {
  let service: CustomerGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CustomerGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
