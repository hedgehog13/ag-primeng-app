import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRole } from '../get-data.service';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h4>Details</h4>
      <p><strong>Name:</strong> {{ user.UserName }}</p>
      <p><strong>Role:</strong> {{ user.Role }}</p>
    </div>
  `,
})
export class UserDetailsComponent implements OnInit{


   constructor(@Inject('tabData') public user: any) {}

  ngOnInit(): void {
    console.log('AAAA', this.user);

  }
}
