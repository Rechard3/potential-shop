import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tabs = [
    {path: ["/", "admin"], displayName: "Admin"},
    {path: ["/", "shop"], displayName: "Shop"},
    {path: ["/", "cart"], displayName: "My eCart"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
