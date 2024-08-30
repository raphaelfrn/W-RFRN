import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {CharacterDTO} from "../../dto/CharacterDTO";

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  imports: [RouterOutlet, CommonModule, RouterLink]
})
export class CharacterListComponent implements OnInit{
  characters$!: Observable<CharacterDTO[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getAllCharacters();
  }
}
