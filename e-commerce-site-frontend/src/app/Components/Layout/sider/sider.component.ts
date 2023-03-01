import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent {
  @Output() myEvent_1 = new EventEmitter();
  @Output() myEvent_2 = new EventEmitter();

  hide_SideBar() {
    this.myEvent_1.emit();
  }

  show_Account_Popup() {
    this.myEvent_2.emit();
  }
}
