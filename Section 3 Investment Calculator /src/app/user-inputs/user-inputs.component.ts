import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {

  @Output() returns = new EventEmitter();

investmentService = inject(InvestmentService)
  initialInvestment = 0;
  annualInvestment = 0;
  returnRate = 0;
  duration = 0;

  onSubmit() {
    console.log(this.investmentService.getReturns(this.initialInvestment, this.annualInvestment, this.returnRate, this.duration ))
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.returnRate = 0;
    this.duration = 0;

    this.returns.emit()
  }

}
