import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-user-contact',
   standalone: true,
  imports: [],
  templateUrl: './user-contact.component.html',
  styleUrl: './user-contact.component.css'
})
export class UserContactComponent {

      constructor(@Inject('tabData') public data: any) {}

}
