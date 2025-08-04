import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratosMaisPedidosService, PratoRanking } from '../services/pratos-mais-pedidos';

@Component({
  selector: 'app-pratos-mais-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pratos-mais-pedidos.html',
  styleUrls: ['./pratos-mais-pedidos.css']
})
export class PratosMaisPedidosComponent implements OnInit {
  ranking: PratoRanking[] = [];

  constructor(private relatorioService: PratosMaisPedidosService) {}

  ngOnInit(): void {
    this.relatorioService.listar().subscribe((dados) => {
      this.ranking = dados;
    });
  }
}
