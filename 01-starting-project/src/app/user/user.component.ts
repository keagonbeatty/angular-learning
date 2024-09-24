import { Component, EventEmitter, Input, Output, output, computed, input} from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Input({required: true}) selected!: boolean;
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
