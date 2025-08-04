import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PratoService, Prato } from '../services/pratos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pratos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pratos.html',
  styleUrls: ['./pratos.css']
})
export class Pratos implements OnInit {
  pratos: Prato[] = [];
  novoPrato: Prato = { nome: '', preco: 0 };
  editandoPratoId: number | null = null;
  formularioVisivel: boolean = false;

  constructor(private pratoService: PratoService) {}

  ngOnInit(): void {
    this.carregarPratos();
  }

  carregarPratos(): void {
    this.pratoService.listar().subscribe({
      next: (dados) => {
        this.pratos = dados;
      },
      error: (erro) => {
        console.error('Erro ao listar pratos:', erro);
      }
    });
  }

  mostrarFormulario(): void {
    this.formularioVisivel = true;
    this.novoPrato = { nome: '', preco: 0 };
    this.editandoPratoId = null;
  }

salvarPrato(): void {
  if (this.editandoPratoId) {
    const pratoParaAtualizar = {
      nome: this.novoPrato.nome,
      preco: this.novoPrato.preco
    };

    this.pratoService.atualizar(this.editandoPratoId, pratoParaAtualizar).subscribe({
      next: () => {
        this.limparFormulario();
        this.carregarPratos();
      },
      error: (erro) => {
        console.error('Erro ao atualizar prato:', erro);
      }
    });
  } else {
    this.pratoService.criar(this.novoPrato).subscribe({
      next: () => {
        this.limparFormulario();
        this.carregarPratos();
      },
      error: (erro) => {
        console.error('Erro ao criar prato:', erro);
      }
    });
  }
}


  editarPrato(prato: Prato): void {
    this.novoPrato = { ...prato };
    this.editandoPratoId = prato.id!;
    this.formularioVisivel = true;
  }

  excluirPrato(id: number): void {
    if (confirm('Tem certeza que deseja excluir este prato?')) {
      this.pratoService.excluir(id).subscribe({
        next: () => this.carregarPratos(),
        error: (erro) => {
          console.error('Erro ao excluir prato:', erro);
        }
      });
    }
  }

  limparFormulario(): void {
    this.novoPrato = { nome: '', preco: 0 };
    this.editandoPratoId = null;
    this.formularioVisivel = false;
  }
}
