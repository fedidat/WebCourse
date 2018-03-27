import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainchatComponent } from './mainchat.component';

describe('MainchatComponent', () => {
  let component: MainchatComponent;
  let fixture: ComponentFixture<MainchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
