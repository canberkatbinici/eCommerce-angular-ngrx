// import { Injectable } from '@angular/core';
// import {AccountService} from '../../services/account.service';
//
// import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
// import {ProductService} from '../../services/product.service';
// import {Store} from '@ngrx/store';
// import * as fromApp from '../../store/app.reducer';
// import {of} from 'rxjs';
// import {delay} from 'rxjs/operators';
//
// @Injectable()
// export class productDetailsResolver implements Resolve<any> {
//     product:any;
//     id: any;
//   constructor(public productService: ProductService, public route: ActivatedRoute, public store: Store<fromApp.AppState> , public router: Router) {}
//
//   resolve(route: ActivatedRouteSnapshot) {
//     route.params.subscribe(
//       (params) => {
//         console.log("params.get('id')", params['id']);
//         this.id = params['id']
//       });
//     this.productService.getSingleProduct(Number(this.id)).subscribe(res => {
//       console.log("resolveren urlisi: " ,route.paramMap.get('id'))
//       // this.product = res;
//       // console.log("get singele product:" , this.product)
//
//       return res;
//     });
//   }
// }
