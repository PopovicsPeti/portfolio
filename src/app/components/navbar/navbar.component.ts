import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  list = document.querySelectorAll('.list')

  constructor() { }

  ngOnInit(): void {
  }

  activeLink() {
    this.list.forEach((item) => 
      item.classList.remove('active'));
      // this.classlist.add('active')
  }
}
