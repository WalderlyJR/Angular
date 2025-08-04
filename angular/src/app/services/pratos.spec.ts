import { TestBed } from '@angular/core/testing';

import { Pratos } from './pratos';

describe('Pratos', () => {
  let service: Pratos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pratos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
