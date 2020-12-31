import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [
    {
      name: 'scooter',
      description:
        'Let your kids love you, bring them this amazing toy, full of fun and excercise',
      imageUrl: '/assets/img/scooter.jpeg',
      price: 25,
    },
    {
      name: 'scooter',
      description:
        'Let your kids love you, bring them this amazing toy, full of fun and excercise',
      imageUrl: '/assets/img/scooter.jpeg',
      price: 25,
    },
    {
      name: 'scooter',
      description:
        'Let your kids love you, bring them this amazing toy, full of fun and excercise',
      imageUrl: '/assets/img/scooter.jpeg',
      price: 25,
    },
    {
      name: 'scooter',
      description:
        'Let your kids love you, bring them this amazing toy, full of fun and excercise',
      imageUrl: '/assets/img/scooter.jpeg',
      price: 25,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
