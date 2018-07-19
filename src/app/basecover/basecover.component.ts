import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authservice';
@Component({
  selector: 'app-basecover',
  templateUrl: './basecover.component.html',
  styleUrls: ['./basecover.component.css']
})
export class BasecoverComponent implements OnInit {
  public authservice: AuthService;

  public menuItems: any[] = [
    {ico: 'fas fa-tachometer-alt', header: 'Dashboard', button: ['Dashboard1', 'Dashboard2']},
    {ico: 'far fa-copy', header: 'Layout Options', button: ['Top Navigation', 'Boxed', 'Fixed', 'Collapsed Sidebar']},
    {ico: 'fas fa-th', header: 'Widgets', button: ['Widgets']},
    {ico: 'fas fa-chart-pie', header: 'Charts', button: ['ChartsJS', 'Morris', 'Flot', 'Inline Charts']},
    {ico: 'fas fa-laptop', header: 'UI Elements', button: ['General', 'Icons', 'Buttons', 'Sliders', 'Timeline', 'Modals']},
    {ico: 'fas fa-edit', header: 'Forms', button: ['General Elements', 'Advanced Elements', 'Editors']},
    {ico: 'fas fa-th-list', header: 'Tables', button: ['Simple Tables', 'Data Tables']},
    {ico: 'fas fa-calendar-alt', header: 'Calendar', button: ['Calendar']},
    {ico: 'fas fa-envelope', header: 'Mailbox', button: ['Inbox', 'Compose', 'Read']},
    {ico: 'fas fa-folder', header: 'Examples', button: ['Invoice', 'Profile', 'Login', 'Register', 'Lockscreen', '404 Error']},
    {ico: 'fas fa-reply-all', header: 'Multilevel', button: ['Level1', 'Level2', 'Level3']},
    {ico: 'fas fa-tachometer-alt', header: 'Documentation'},
    {ico: 'fas fa-tachometer-alt', header: 'Important'},
    {ico: 'fas fa-tachometer-alt', header: 'Warnings'},
    {ico: 'fas fa-tachometer-alt', header: 'Information'},
    {ico: 'fas fa-tachometer-alt', header: 'Premium Templates'},
  ];
  constructor() { }

  public ngOnInit() {
    this.populateMenu();
  }
  /**
   * Change menu 'opened' property value on menu item click
   * And close any other opened menu item
   * @param item
   */
  public menuClicked(item: any) {
    // If menu items exist, we continue our logic
    if (this.menuItems.length) {
      // Iterate through menu items
      // Compare clicked menu item 'id' and change it's 'opened' property to reverse boolean value
      // All other menu items 'opened' set to false. Closing any menu item opened.
      this.menuItems.forEach((m: any) => item.id === m.id ? m.opened = !m.opened :  m.opened = false);
    }
  }

  /**
   * List child element action
   * @param childItem
   */
  public menuChildClicked(childItem: any) {
    console.log('menuChildClicked childItem', childItem, ' clicked. Do any action you need here. For example redirect.');
  }

  /**
   * Populating menu items with child elements
   * Each has own id to identify in 'open/close' js logic
   */
  private populateMenu() {
    if (this.menuItems.length) {
      const allItems: any[] = [];
      for (let m = 0; m < this.menuItems.length; m++) {
        console.log();
        const item: any = {
          id: m,
          opened: false,
          title: this.menuItems[m].header,
          innerItems: [],
          icon: this.menuItems[m].ico
        };
        if (this.menuItems[m].button) {
          for (let c = 0; c < this.menuItems[m].button.length; c++) {
            item.innerItems.push({
              id: 1000 * m + c,
              title: this.menuItems[m].button[c]
            });
          }
          allItems.push(item);
        }
      }
      this.menuItems = allItems;
    }
  }
  quit() {
    this.authservice.logOutFunk();
  }
}
