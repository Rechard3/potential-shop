import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;
  drawerOpened = true;

  navItems = [
    {name: "Add Product", link: ["/admin", "add-product"]},
    {name: "Update Product", link: ["/admin", "update-product"]},
    {name: "Products list", link: ["/admin", "products-list"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
