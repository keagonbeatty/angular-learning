import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  annualInvestment = '0';
  initialInvestment = '0'
  duration = '5'
  expectedReturn = '10';

  onSubmit() {
    this.calculate.emit({initialInvestment : +this.initialInvestment,
      duration: +this.duration, 
      expectedReturn: +this.expectedReturn, 
      annualInvestment: +this.annualInvestment
    });
  }

}
