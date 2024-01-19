import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  list = document.querySelectorAll('.list')

  activeLink() {
    this.list.forEach((item) => 
      item.classList.remove('active'));
      // this.classlist.add('active')
  }
}
