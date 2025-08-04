import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesGastosService, ClienteGasto, ClienteMaisGastaramResponse } from '../services/clientes-gastos';

@Component({
  selector: 'app-clientes-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-gastos.html',
  styleUrls: ['./clientes-gastos.css']
})


export class ClientesGastosComponent implements OnInit {
  ranking: ClienteGasto[] = [];

  constructor(private relatorioService: ClientesGastosService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe((dados: ClienteGasto[]) => {
      this.ranking = dados;
    });
  }
}
