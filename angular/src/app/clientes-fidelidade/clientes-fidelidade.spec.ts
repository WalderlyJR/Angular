import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFidelidade } from './clientes-fidelidade';

describe('ClientesFidelidade', () => {
  let component: ClientesFidelidade;
  let fixture: ComponentFixture<ClientesFidelidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesFidelidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesFidelidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
