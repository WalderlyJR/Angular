import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

export interface ClienteMaisPedidosResponse {
  ClienteId: number;
  quantidadePedidos: number;
  Cliente: {
    nome: string;
  };
}

export interface ClientePedidos {
  nome: string;
  quantidadePedidos: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesFidelidadeService {
  private apiUrl = `${environment.apiUrl}/listas/clientes-com-mais-pedidos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ClientePedidos[]> {
    return this.http.get<ClienteMaisPedidosResponse[]>(this.apiUrl).pipe(
      map(resposta =>
        resposta
          .filter(item => item.Cliente !== null)
          .map(item => ({
            nome: item.Cliente.nome,
            quantidadePedidos: item.quantidadePedidos
          }))
      )
    );
  }
}
