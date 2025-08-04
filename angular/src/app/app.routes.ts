import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pratos } from './pratos/pratos';
import { Clientes } from './clientes/clientes';
import { Pedidos } from './pedidos/pedidos';
import { PratosMaisPedidosComponent } from './pratos-mais-pedidos/pratos-mais-pedidos';
import { ClientesFidelidadeComponent } from './clientes-fidelidade/clientes-fidelidade';
import { ClientesGastosComponent } from './clientes-gastos/clientes-gastos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pratos', component: Pratos },
  { path: 'clientes', component: Clientes },
  { path: 'pedidos', component: Pedidos },
  { path: 'pratos-mais-pedidos', component: PratosMaisPedidosComponent },
  { path: 'clientes-fidelidade', component: ClientesFidelidadeComponent },
  { path: 'clientes-gastos', component: ClientesGastosComponent }
];
