import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-generator',
  imports: [],
  templateUrl: './otp-generator.component.html',
  styleUrl: './otp-generator.component.scss'
})
export class OtpGeneratorComponent implements OnInit {
  otp: string = ''

  ngOnInit(): void {
    this.otp = this.resetOtp()
  }

  generateOtp(number: number): string {
    let otp = '';
    for (let i = 0; i < number; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }

  resetOtp() {
    let otp = this.generateOtp(6)
    if(otp.split('').includes('0')) {
      otp = otp.split('').map(el => {
        if(el === '0') {
          return '1'
        }
        return el
      }).join('')
    }
    return otp;
  }

}
