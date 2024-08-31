import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../services/quest.service';
import { QuestDTO } from '../../dto/QuestDTO';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quest-list',
  standalone: true,
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class QuestListComponent implements OnInit {
  quests$!: Observable<QuestDTO[]>;

  constructor(private questService: QuestService) {}

  ngOnInit(): void {
    this.quests$ = this.questService.getAllQuests();
  }
}
