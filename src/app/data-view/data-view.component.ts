import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';
import { GetDataService, UserRole } from '../get-data.service';
@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, TableModule, PanelModule, ButtonModule, RippleModule, TabsModule],
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
 users: UserRole[] = [];
  columns: { field: keyof UserRole; header: string }[] = [];

  private userRoleService = inject(GetDataService);
  expandedRows: { [key: number]: boolean } = {};
  ngOnInit(): void {
  this.userRoleService.getData().subscribe(data => {
      this.users = data;

      // Generate columns from keys (filtering out unwanted fields if needed)
      this.columns = Object.keys(data[0])
     //   .filter(key => key !== 'ID') // Optionally exclude keys like 'ID'
        .map(key => ({ field: key as keyof UserRole, header: this.formatHeader(key) }));
    });
  }


toggleRowExpansion(user: UserRole) {
    this.expandedRows[user.ID]
      ? delete this.expandedRows[user.ID]
      : this.expandedRows[user.ID] = true;
  }

  formatHeader(key: string): string {
    // Convert camel case to readable format: UserName -> User Name
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  }

  onRowExpand(event: any) {

    this.expandedRows[event.data.ID] = true;
  }

  onRowCollapse(event: any) {

    delete this.expandedRows[event.data.ID];
  }


}
