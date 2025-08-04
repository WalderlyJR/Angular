import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface ClientePedidos {
  nome: string;
  quantidadePedidos: number;
}

export interface ClienteMaisPedidosResponse {
  ClienteId: number;
  quantidadePedidos: number;
  Cliente: {
    nome: string;
  };
}

export interface ClienteRanking {
  nome: string;
  totalPedidos: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesFidelidadeService {
  private apiUrl = `${environment.apiUrl}/listas/clientes-com-mais-pedidos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ClienteMaisPedidosResponse[]> {
    return this.http.get<ClienteMaisPedidosResponse[]>(this.apiUrl);
  }
}
