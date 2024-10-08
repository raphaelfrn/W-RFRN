import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestListComponent } from './quest-list.component';

describe('QuestListComponent', () => {
  let component: QuestListComponent;
  let fixture: ComponentFixture<QuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
