import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosMaisPedidos } from './pratos-mais-pedidos';

describe('PratosMaisPedidos', () => {
  let component: PratosMaisPedidos;
  let fixture: ComponentFixture<PratosMaisPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PratosMaisPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosMaisPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
