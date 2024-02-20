import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridModel } from '../models/GridModel';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private apiUrl = 'https://localhost:44354/PaperCutter';

  constructor(private http: HttpClient) { }

  sendGridData(gridData: GridModel): Observable<number> {
    return this.http.post<number>(this.apiUrl, gridData);
 }
}