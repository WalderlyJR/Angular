import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesGastos } from './clientes-gastos';

describe('ClientesGastos', () => {
  let component: ClientesGastos;
  let fixture: ComponentFixture<ClientesGastos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesGastos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesGastos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
