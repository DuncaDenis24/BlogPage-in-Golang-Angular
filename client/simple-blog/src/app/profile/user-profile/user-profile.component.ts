import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  isEditing = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    const userId = user ? JSON.parse(user).id : null;
    console.log(userId) 
    if (userId) {
      this.userService.getUserById(userId).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    }
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveChanges() {
    this.userService.updateUser(this.user.id, this.user).subscribe(() => {
      this.isEditing = false;
    });
  }
  cancelEdit() {
    this.isEditing = false;
    this.ngOnInit(); 
  }
}
