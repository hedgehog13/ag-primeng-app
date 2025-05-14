import { Injectable, resource } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface UserRole {
  AdminNote: string | null;
  DateEntered: string;
  Department: string;
  Descr: string;
  ID: number;
  IsActive: number;
  Role: string;
  SignAndVerify: number;
  SystemNote: string | null;
  UpdateDate: string;
  UserName: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private users: UserRole[] = [
    {
      AdminNote: 'comment 1',
      DateEntered: "2024-05-11 12:08:55",
      Department: "department 1",
      Descr: "Super admin",
      ID: 1,
      IsActive: 1,
      Role: "SuperAdmin 1",
      SignAndVerify: 0,
      SystemNote: null,
      UpdateDate: "2025-05-11 12:08:55",
      UserName: "Admin_1"
    },
    {
      AdminNote: "comment",
      DateEntered: "2024-05-11 12:08:55",
      Department: "department 2",
      Descr: "admin",
      ID: 5,
      IsActive: 1,
      Role: "Admin",
      SignAndVerify: 0,
      SystemNote: "systemNote",
      UpdateDate: "2025-05-11 12:08:55",
      UserName: "Admin Admi"
    }
  ];


  constructor() { }
  getData = (): Observable<UserRole[]> => {
    return of(this.users)
  }
}
