import { Component, EventEmitter, Output, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  annualInvestment = signal('0');
  initialInvestment = signal('0')
  duration = signal('5')
  expectedReturn = signal('10');

  onSubmit() {
    this.calculate.emit({initialInvestment : +this.initialInvestment(),
      duration: +this.duration(), 
      expectedReturn: +this.expectedReturn(), 
      annualInvestment: +this.annualInvestment()
    });
  }

}
