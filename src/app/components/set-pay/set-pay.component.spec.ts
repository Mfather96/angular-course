import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPayComponent } from './set-pay.component';

describe('SetPayComponent', () => {
  let component: SetPayComponent;
  let fixture: ComponentFixture<SetPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
