import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommanagerComponent } from './roommanager.component';

describe('RoommanagerComponent', () => {
  let component: RoommanagerComponent;
  let fixture: ComponentFixture<RoommanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
