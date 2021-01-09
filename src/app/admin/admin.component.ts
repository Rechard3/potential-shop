import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  drawerOpened = false;

  navItems = [
    {name: "Add Product", link: ["/admin", "add-product"]},
    {name: "Update Product", link: ["/admin", "update-product"]},
    {name: "Products list", link: ["/admin", "products-list"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
