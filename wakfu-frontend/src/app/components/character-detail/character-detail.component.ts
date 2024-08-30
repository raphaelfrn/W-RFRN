import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CharacterService } from '../../services/character.service';
import {CharacterDTO} from "../../dto/CharacterDTO";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class CharacterDetailComponent implements OnInit {
  character: CharacterDTO | null = null;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCharacter();
  }

  loadCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacterById(id).subscribe(data => {
      this.character = data;
    });
  }
}
