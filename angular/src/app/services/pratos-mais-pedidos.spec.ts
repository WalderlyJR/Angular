import { TestBed } from '@angular/core/testing';

import { PratosMaisPedidos } from './pratos-mais-pedidos';

describe('PratosMaisPedidos', () => {
  let service: PratosMaisPedidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PratosMaisPedidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
