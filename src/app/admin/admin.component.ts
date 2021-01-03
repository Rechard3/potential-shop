import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  drawerOpened = false;

  navItems = [
    {name: "Add Product", link: ["add-product"]},
    {name: "Update Product", link: ["update-product"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
