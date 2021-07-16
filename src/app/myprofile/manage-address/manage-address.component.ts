import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {User} from '../../models/user';
import {adress} from '../../models/user';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.scss']
})
export class ManageAddressComponent implements OnInit {
  // @Input() user: myUser;
  addressForm:FormGroup;
  selected = new FormControl(0);
  public currUser : any
  constructor( private fb: FormBuilder,private accountService: AccountService , private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currUser = data.data;
    });


    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100)

    this.addressForm = this.fb.group({
      name: [],
      fistName: [],
      surName: [],
      country: [],
      city: [],
      district: [],
      neighborhood  : [],
      addressLine: [],
      phone: [],
      zipCode: [],
      additional: []
    })
  }

  createAddressForm(){

    // console.log("is extentibnililil:" + Object.isExtensible(this.currUser))
    // Object.preventExtensions(this.currUser);
    // console.log("fonksiyondan sonra :" + Object.isExtensible(this.currUser))

    // Object.defineProperty(this.currUser.address,"",{
    //   id : 0,
    //   name: "",
    //   firstname: "",
    //   surname: "",
    //   country: "",
    //   city: "",
    //   district: "",
    //   neighborhood: "",
    //   addressLine: "",
    //   phone: "",
    //   zipCode: "",
    //   additional: ""
    // })
    this.currUser = JSON.parse(JSON.stringify(this.currUser))
    this.currUser.address.push({
      id : null,
      name: "Yeni Adres",
      firstname: "",
      surname: "",
      country: "",
      city: "",
      district: "",
      neighborhood: "",
      addressLine: "",
      phone: "",
      zipCode: "",
      additional: ""
    });

      this.selected.setValue(this.currUser.address.length - 1);

      }

}
