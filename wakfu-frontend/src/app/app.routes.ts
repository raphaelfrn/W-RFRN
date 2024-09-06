import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import {QuestListComponent} from "./components/quest-list/quest-list.component";
import {CharacterQuestsComponent} from "./components/character-quests/character-quests.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";

export const routes: Routes = [
    { path: 'characters', component: CharacterListComponent },
    { path: 'character-quests', component: CharacterQuestsComponent },
    { path: 'character/:id', component: CharacterDetailComponent },
    { path: 'quests', component: QuestListComponent },
  { path: 'todo-list', component: TodoListComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
];
