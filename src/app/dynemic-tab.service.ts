import { Injectable } from '@angular/core';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Injectable({ providedIn: 'root' })
export class TabDataService {



  getTabsForUser(userId: number) {
    return [
      {
        component: UserContactComponent,
        data: { tabTitle: 'contacts', entityName: 'user', id: userId }
      },
      {
        component: UserDetailsComponent,
        data: { tabTitle: 'details', entityName: 'user', id: userId }
      }
    ];
  }
}

