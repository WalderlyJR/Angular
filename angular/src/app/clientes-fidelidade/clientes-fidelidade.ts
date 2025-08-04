import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFidelidadeService, ClientePedidos } from '../services/clientes-fidelidade';

@Component({
  selector: 'app-clientes-fidelidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-fidelidade.html',
  styleUrls: ['./clientes-fidelidade.css']
})
export class ClientesFidelidadeComponent implements OnInit {
  ranking: ClientePedidos[] = [];

  constructor(private fidelidadeService: ClientesFidelidadeService) {}

  ngOnInit(): void {
    this.fidelidadeService.listar().subscribe(dados => {
      this.ranking = dados
        .filter(item => item.Cliente !== null)
        .map(item => ({
          nome: item.Cliente.nome,
          quantidadePedidos: item.quantidadePedidos
        }));
    });
  }
}
