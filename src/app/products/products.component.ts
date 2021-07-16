import {Component, Input, OnInit, Output} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {AddProductToCart} from '../store/shop/shop.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {Product} from '../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output('product') product: Product;
  carouselOptions =
  {
    items: 1,
    dots: false,
    navigation: false,
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoHeightClass: 'owl-height',

}
  products: [] ;
  default = new Array(6);

  constructor(private router: Router, private productService: ProductService,private store: Store<fromApp.AppState>) {
    this.dataSource.data = TREE_DATA;
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    });
   }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  ngOnInit() {
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

productHome(id) {
  this.router.navigate(['products/'+id]);
}



}



/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Outdoor',
    children: [
      {name: 'Alarm packet 1'},
      {name: 'Alarm packet 2'},
      {name: 'Alarm packet 3'},
    ]
  }, {
    name: 'Indoor',
    children: [
      {name: 'Alarm packet 1'},
      {name: 'Alarm packet 2'},
      {name: 'Alarm packet 3'},
    ]
  },{
    name: 'Other',
    children: [
      {name: 'Alarm packet 1'},
      {name: 'Alarm packet 2'},
      {name: 'Alarm packet 3'},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
