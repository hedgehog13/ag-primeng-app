import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, TableModule, PanelModule, ButtonModule, RippleModule, TabsModule],
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent {
  users = [
    {
      AdminNote: null,
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


  expandedRows: { [key: number]: boolean } = {};

  onRowExpand(event: any) {

    this.expandedRows[event.data.ID] = true;
  }

  onRowCollapse(event: any) {

    delete this.expandedRows[event.data.ID];
  }


}
