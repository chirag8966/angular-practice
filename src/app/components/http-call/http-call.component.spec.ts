import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallComponent } from './http-call.component';

describe('HttpCallComponent', () => {
  let component: HttpCallComponent;
  let fixture: ComponentFixture<HttpCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
