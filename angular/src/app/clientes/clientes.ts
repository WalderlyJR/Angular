import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from '../services/clientes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrls: ['./clientes.css']
})
export class Clientes implements OnInit {
  clientes: Cliente[] = [];
  novoCliente: Cliente = { nome: '', cpf: '' };
  editandoClienteId: number | null = null;
  clientesVisiveis: boolean = false;


  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    //this.carregarClientes();
  }

carregarClientes(): void {
  this.clienteService.listar().subscribe((dados) => {
    this.clientes = dados;
    this.clientesVisiveis = true;
  });
}


salvarCliente(): void {
  if (this.editandoClienteId) {
    const clienteParaAtualizar = {
      nome: this.novoCliente.nome,
      cpf: this.novoCliente.cpf
    };

    this.clienteService.atualizar(this.editandoClienteId, clienteParaAtualizar).subscribe({
      next: () => {
        this.limparFormulario();
        this.carregarClientes();
      },
      error: (err) => {
        alert(err.error.mensagem || 'Erro ao atualizar cliente.');
      }
    });
  } else {
    this.clienteService.criar(this.novoCliente).subscribe({
      next: () => {
        this.limparFormulario();
        this.carregarClientes();
      },
      error: (err) => {
        alert(err.error.mensagem || 'Erro ao cadastrar cliente.');
      }
    });
  }
}


editarCliente(cliente: Cliente): void {
  console.log('Editando cliente com ID:', cliente.id); // debug
  this.novoCliente = { ...cliente };
  this.editandoClienteId = cliente.id ?? null;
}


  excluirCliente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.excluir(id).subscribe(() => {
        this.carregarClientes();
      });
    }
  }

  limparFormulario(): void {
    this.novoCliente = { nome: '', cpf: '' };
    this.editandoClienteId = null;
  }
}
