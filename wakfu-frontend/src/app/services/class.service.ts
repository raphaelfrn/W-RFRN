import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClassDTO} from "../dto/ClassDTO";


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseUrl = 'http://localhost:8080/api/classes'; // Changez l'URL selon votre configuration

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<ClassDTO[]> {
    return this.http.get<ClassDTO[]>(this.baseUrl);
  }

  getClassById(id: number): Observable<ClassDTO> {
    return this.http.get<ClassDTO>(`${this.baseUrl}/${id}`);
  }

  createClass(clazz: ClassDTO): Observable<ClassDTO> {
    return this.http.post<ClassDTO>(this.baseUrl, clazz);
  }

  updateClass(id: number, clazz: ClassDTO): Observable<ClassDTO> {
    return this.http.put<ClassDTO>(`${this.baseUrl}/${id}`, clazz);
  }

  deleteClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
