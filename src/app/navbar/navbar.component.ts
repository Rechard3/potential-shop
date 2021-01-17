import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState, AuthStateModel } from '../auth/store/auth.state';

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

  @Select(AuthState) authState: Observable<AuthStateModel>;

  constructor(public router: Router, private snackbar: MatSnackBar) {
  }

  isActive(link: string){
    return this.router.isActive(link, false);
  }

  ngOnInit(): void {
  }

  logout(){
    this.snackbar.open("Not implemented just yet", "OK", {duration: 3000});
  }

}
