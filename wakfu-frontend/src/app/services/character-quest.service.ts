import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CharacterQuestDTO} from "../dto/CharacterQuestDTO";
import {CharacterDTO} from "../dto/CharacterDTO";
import {QuestDTO} from "../dto/QuestDTO";



@Injectable({
  providedIn: 'root'
})
export class CharacterQuestService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterDTO[]> {
    return this.http.get<CharacterDTO[]>(`${this.baseUrl}/characters`);
  }

  getAllQuests(): Observable<QuestDTO[]> {
    return this.http.get<QuestDTO[]>(`${this.baseUrl}/quests`);
  }

  getCompletionStatus(): Observable<CharacterQuestDTO[]> {
    return this.http.get<CharacterQuestDTO[]>(`${this.baseUrl}/character-quests`);
  }

  updateCompletionStatus(characterId: number, questId: number, status: boolean): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/character-quests/${characterId}/${questId}`,
      null,
      {params: {status: status.toString()}}
    );
  }
}
