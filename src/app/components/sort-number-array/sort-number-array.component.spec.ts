import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNumberArrayComponent } from './sort-number-array.component';

describe('SortNumberArrayComponent', () => {
  let component: SortNumberArrayComponent;
  let fixture: ComponentFixture<SortNumberArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortNumberArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortNumberArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
