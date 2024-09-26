import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  annualInvestment = '0';
  initialInvestment = '0'
  duration = '5'
  expectedReturn = '10';

  onSubmit() {
    console.log("submitted")
    console.log(this.annualInvestment)
    console.log(this.initialInvestment)
    console.log(this.expectedReturn)
    console.log(this.duration)
  }

}
