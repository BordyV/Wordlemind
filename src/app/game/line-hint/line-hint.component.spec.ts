import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHintComponent } from './line-hint.component';

describe('LineHintComponent', () => {
  let component: LineHintComponent;
  let fixture: ComponentFixture<LineHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineHintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
