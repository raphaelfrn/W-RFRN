import {ClassDTO} from "./ClassDTO";
import {UserDTO} from "./UserDTO";

export interface CharacterDTO {
  characterId: number;
  characterName: string;
  characterLvl: number;
  chests: number;
  classDTO: ClassDTO;
  userDTO: UserDTO;
}
