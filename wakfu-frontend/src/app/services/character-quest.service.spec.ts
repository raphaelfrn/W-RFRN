import { TestBed } from '@angular/core/testing';

import { CharacterQuestService } from './character-quest.service';

describe('CharacterQuestService', () => {
  let service: CharacterQuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterQuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
