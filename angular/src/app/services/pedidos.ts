import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Pedido {
  id?: number;
  cpf: string;
  pratoId: number;
  Cliente?: {
    cpf: string;
  };
  Prato?: {
    nome: string;
  };
}

export interface PedidoInput {
  cpf: string;
  pratoId: number;
}

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private apiUrl = `${environment.apiUrl}/pedidos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  criar(pedido: PedidoInput): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

}