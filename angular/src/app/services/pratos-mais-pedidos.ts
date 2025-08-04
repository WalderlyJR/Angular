import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface PratoRanking {
  pratoId: number;
  nome: string;
  quantidadePedidos: number;
}

@Injectable({ providedIn: 'root' })
export class PratosMaisPedidosService {
  private apiUrl = `${environment.apiUrl}/listas/pratos-mais-pedidos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<PratoRanking[]> {
    return this.http.get<PratoRanking[]>(this.apiUrl);
  }
}
