import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpGeneratorComponent } from './otp-generator.component';

describe('OtpGeneratorComponent', () => {
  let component: OtpGeneratorComponent;
  let fixture: ComponentFixture<OtpGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
