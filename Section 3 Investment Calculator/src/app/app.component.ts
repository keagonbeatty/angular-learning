import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputsComponent, InvestmentResultsComponent]
})
export class AppComponent {
  showInvestments = false;

  showComponent(){
    this.showInvestments = true;
  }
}
