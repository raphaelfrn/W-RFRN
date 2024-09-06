import { Component, OnInit } from '@angular/core';
import {Observable, forkJoin, map} from 'rxjs';
import { CharacterDTO } from '../../dto/CharacterDTO';
import { QuestDTO } from '../../dto/QuestDTO';
import { CharacterQuestDTO } from '../../dto/CharacterQuestDTO';
import { CharacterQuestService } from '../../services/character-quest.service';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, CommonModule, LowerCasePipe} from "@angular/common";

@Component({
  selector: 'app-character-quests',
  standalone: true,
  templateUrl: './character-quests.component.html',
  imports: [
    FormsModule,
    AsyncPipe,
    LowerCasePipe,
    CommonModule
  ],
  styleUrls: ['./character-quests.component.scss']
})
export class CharacterQuestsComponent implements OnInit {
  characters$!: Observable<CharacterDTO[]>;
  quests$!: Observable<QuestDTO[]>;
  characterQuests$!: Observable<CharacterQuestDTO[]>;
  isFilterModalOpen = false;
  selectedQuestTypes = {
    principale: true,
    otomai: true,
    mercenaires: true,
    annexe: true
  };

  combinedData$!: Observable<any[]>;

  constructor(private characterQuestService: CharacterQuestService) {}

  ngOnInit(): void {
    this.characters$ = this.characterQuestService.getAllCharacters();
    this.quests$ = this.characterQuestService.getAllQuests();
    this.characterQuests$ = this.characterQuestService.getCompletionStatus();

    this.combinedData$ = forkJoin([this.quests$, this.characters$, this.characterQuests$]).pipe(
      map(([quests, characters, characterQuests]) => {
        return quests
          .filter(quest => {
            if (quest.questType.toLowerCase() === 'principale' && this.selectedQuestTypes.principale) return true;
            if (quest.questType.toLowerCase() === 'otomai' && this.selectedQuestTypes.otomai) return true;
            if (quest.questType.toLowerCase() === 'mercenaires' && this.selectedQuestTypes.mercenaires) return true;
            if (quest.questType.toLowerCase() === 'annexe' && this.selectedQuestTypes.annexe) return true;
            return false;
          })
          .map(quest => ({
            questId: quest.questId,
            questName: quest.questName,
            questType: quest.questType,
            questDescription: quest.questDescription,
            characters: characters.map(character => ({
              characterId: character.characterId,
              classIcon: character.classDTO.classIcon,
              completionStatus: characterQuests.find(cq => cq.characterId === character.characterId && cq.questId === quest.questId)?.completionStatus || false,
              uniqueKey: `${quest.questId}-${character.characterId}`
            }))
          }));
      })
    );
  }

  updateStatus(characterId: number, questId: number, status: boolean): void {
    this.characterQuestService.updateCompletionStatus(characterId, questId, status).subscribe(() => {
      // Refresh the data after the update
      this.ngOnInit();
    });
  }

  openFilterModal() {
    this.isFilterModalOpen = true;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  applyFilter() {
    // Ferme la modal après avoir appliqué le filtre
    this.isFilterModalOpen = false;

    // Recharge la liste des quêtes en fonction des filtres sélectionnés
    this.ngOnInit();
  }
}
