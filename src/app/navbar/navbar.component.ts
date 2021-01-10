import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  ];
  activeLink = null;

  constructor(public router: Router) {
  }

  isActive(link: string){
    return this.router.isActive(link, false);
  }

  ngOnInit(): void {
  }

}
