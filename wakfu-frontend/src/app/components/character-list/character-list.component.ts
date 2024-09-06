import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import {catchError, Observable, of, tap} from 'rxjs';
import {CommonModule, KeyValue} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDTO } from "../../dto/CharacterDTO";

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule]
})
export class CharacterListComponent implements OnInit {
  characters$!: Observable<CharacterDTO[]>;
  selectedCharacter!: CharacterDTO | null;
  newLevel: number = 1;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getAllCharacters();
  }

  selectCharacter(character: CharacterDTO): void {
    this.selectedCharacter = character;
    this.newLevel = character.characterLvl;
  }
  updateCharacterLevel(): void {
    if (this.selectedCharacter && this.newLevel !== this.selectedCharacter.characterLvl) {
      this.characterService.updateCharacterLevel(this.selectedCharacter.characterId, this.newLevel).pipe(
        tap(() => {
          // Mettez à jour localement le niveau du personnage
          if (this.selectedCharacter) {
            this.selectedCharacter.characterLvl = this.newLevel;
          }
          console.log(`Updated ${this.selectedCharacter?.characterName}'s level to ${this.newLevel}`);
        }),

        catchError(error => {
          // Gérez les erreurs
          console.error('Error updating character level:', error);
          return of(null);
        })
      ).subscribe();
    }
  }


}
