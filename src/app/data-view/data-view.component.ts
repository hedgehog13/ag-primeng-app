import { Component, Inject, inject, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';
import { GetDataService, UserRole } from '../get-data.service';
import { TabViewModule } from 'primeng/tabview';
import { TabDataService } from '../dynemic-tab.service';
@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, TableModule, PanelModule, ButtonModule, RippleModule, TabsModule, TabViewModule],
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {



  tabs: any[] = [];

  tabsPerRow: { [key: number]: any[] } = {};
  users: UserRole[] = [];
  columns: { field: keyof UserRole; header: string }[] = [];

  private userRoleService = inject(GetDataService);



  expandedRows: { [key: number]: boolean } = {};




  constructor(private injector: Injector, private tabDataService: TabDataService) { }


  createInjector(data: any): Injector {
    return Injector.create({
      providers: [{ provide: 'tabData', useValue: data }],
      parent: this.injector
    });
  }



  ngOnInit(): void {

    this.userRoleService.getData().subscribe(data => {

      this.users = data;
      // Generate columns from keys (filtering out unwanted fields if needed)
      this.columns = Object.keys(data[0])

        .map(key => ({ field: key as keyof UserRole, header: this.formatHeader(key) }));
      // console.log(this.columns)
    });
  }


  toggleRowExpansion(user: UserRole) {


   if (this.expandedRows[user.ID]) {
    delete this.expandedRows[user.ID];
  } else {
    this.expandedRows[user.ID] = true;

    if (!this.tabsPerRow[user.ID]) {
      this.tabsPerRow[user.ID] = this.tabDataService.getTabsForUser(user.ID);


    }
  }


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
