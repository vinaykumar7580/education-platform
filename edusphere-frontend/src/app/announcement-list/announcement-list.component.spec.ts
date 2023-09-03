import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementListComponent } from './announcement-list.component';

describe('AnnouncementListComponent', () => {
  let component: AnnouncementListComponent;
  let fixture: ComponentFixture<AnnouncementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementListComponent]
    });
    fixture = TestBed.createComponent(AnnouncementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
