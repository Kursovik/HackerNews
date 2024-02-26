import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class HackerNewsApiService {
  constructor(private readonly http: HttpClient) {}
  public getAll<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params: params });
    // return of({hits: []});
  }
}
