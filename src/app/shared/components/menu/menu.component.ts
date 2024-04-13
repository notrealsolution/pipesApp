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
            {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Texto y fechas',
                  icon: 'pi pi-align-left'
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe'
                },
              ]
            },
            {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
              items:[
                {
                  label: 'Otro elemento',
                  icon: 'pi pi-cog',
                }
              ]
            }

        ];
    }

}
