import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {QuestDTO} from "../dto/QuestDTO";

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  private baseUrl = 'http://localhost:8080/api/quests';

  constructor(private http: HttpClient) {}

  getAllQuests(): Observable<QuestDTO[]> {
    return this.http.get<QuestDTO[]>(`${this.baseUrl}`);
  }

  getQuestById(id: number): Observable<QuestDTO> {
    return this.http.get<QuestDTO>(`${this.baseUrl}/${id}`);
  }

  createQuest(quest: QuestDTO): Observable<QuestDTO> {
    return this.http.post<QuestDTO>(`${this.baseUrl}`, quest);
  }

  updateQuest(id: number, quest: QuestDTO): Observable<QuestDTO> {
    return this.http.put<QuestDTO>(`${this.baseUrl}/${id}`, quest);
  }

  deleteQuest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
