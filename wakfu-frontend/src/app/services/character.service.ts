import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CharacterDTO} from "../dto/CharacterDTO";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'http://localhost:8080/api/characters'; // URL de l'API

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterDTO[]> {
    return this.http.get<CharacterDTO[]>(this.baseUrl);
  }

  getCharacterById(id: number): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(`${this.baseUrl}/${id}`);
  }

  createCharacter(character: CharacterDTO): Observable<CharacterDTO> {
    return this.http.post<CharacterDTO>(this.baseUrl, character);
  }

  updateCharacter(id: number, character: CharacterDTO): Observable<CharacterDTO> {
    return this.http.put<CharacterDTO>(`${this.baseUrl}/${id}`, character);
  }

  updateCharacterLevel(characterId: number, newLevel: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${characterId}`, { characterLvl: newLevel });
  }

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
