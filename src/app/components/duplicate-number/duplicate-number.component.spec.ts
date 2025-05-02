import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateNumberComponent } from './duplicate-number.component';

describe('DuplicateNumberComponent', () => {
  let component: DuplicateNumberComponent;
  let fixture: ComponentFixture<DuplicateNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
