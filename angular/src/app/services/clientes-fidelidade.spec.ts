import { TestBed } from '@angular/core/testing';

import { ClientesFidelidade } from './clientes-fidelidade';

describe('ClientesFidelidade', () => {
  let service: ClientesFidelidade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesFidelidade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
