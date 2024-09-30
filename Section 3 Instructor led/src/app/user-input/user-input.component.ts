import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {}

  annualInvestment = signal('0');
  initialInvestment = signal('0')
  duration = signal('5')
  expectedReturn = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment : +this.initialInvestment(),
      duration: +this.duration(), 
      expectedReturn: +this.expectedReturn(), 
      annualInvestment: +this.annualInvestment()
    });
    this.initialInvestment.set('0');
    this.duration.set('0');
    this.expectedReturn.set('0');
    this.annualInvestment.set('0');
  }

}
