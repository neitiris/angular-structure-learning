import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-basecover',
  templateUrl: './basecover.component.html',
  styleUrls: ['./basecover.component.css']
})
export class BasecoverComponent implements OnInit {

  public menuItems: any[] = [
    {header: 'Dashboard', button: ['Dashboard1', 'Dashboard2']},
    {header: 'Layout Options', button: ['Top Navigation', 'Boxed', 'Fixed', 'Collapsed Sidebar']},
    {header: 'Widgets', button: ['Widgets']},
    {header: 'Charts', button: ['ChartsJS', 'Morris', 'Flot', 'Inline Charts']},
    {header: 'UI Elements', button: ['General', 'Icons', 'Buttons', 'Sliders', 'Timeline', 'Modals']},
    {header: 'Forms', button: ['General Elements', 'Advanced Elements', 'Editors']},
    {header: 'Tables', button: ['Simple Tables', 'Data Tables']},
    {header: 'Calendar', button: ['Calendar']},
    {header: 'Mailbox', button: ['Inbox', 'Compose', 'Read']},
    {header: 'Examples', button: ['Invoice', 'Profile', 'Login', 'Register', 'Lockscreen', '404 Error']},
    {header: 'Multilevel', button: ['Level1', 'Level2', 'Level3']},
    {header: 'Documentation'},
    {header: 'Important'},
    {header: 'Warnings'},
    {header: 'Information'},
    {header: 'Premium Templates'},
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
          innerItems: []
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
}
