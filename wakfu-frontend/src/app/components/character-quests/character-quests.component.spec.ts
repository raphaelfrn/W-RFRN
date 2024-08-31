import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterQuestsComponent } from './character-quests.component';

describe('CharacterQuestsComponent', () => {
  let component: CharacterQuestsComponent;
  let fixture: ComponentFixture<CharacterQuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterQuestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
