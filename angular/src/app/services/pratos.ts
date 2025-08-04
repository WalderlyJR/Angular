// src/app/services/prato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Prato {
  id?: number;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class PratoService {
  private apiUrl = `${environment.apiUrl}/pratos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Prato[]> {
    return this.http.get<Prato[]>(this.apiUrl);
  }

  criar(prato: Prato): Observable<Prato> {
    return this.http.post<Prato>(this.apiUrl, prato);
  }

  atualizar(id: number, prato: Prato): Observable<Prato> {
    return this.http.put<Prato>(`${this.apiUrl}/${id}`, prato);
  }

  excluir(id: number): Observable<{ mensagem: string }> {
    return this.http.delete<{ mensagem: string }>(`${this.apiUrl}/${id}`);
  }
}
