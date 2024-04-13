import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {label: 'New', icon: 'pi pi-fw pi-plus'},
            {label: 'Open', icon: 'pi pi-fw pi-download'},
            {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
        ];
    }

}
