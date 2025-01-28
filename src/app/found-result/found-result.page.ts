import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-found-result',
  templateUrl: './found-result.page.html',
  styleUrls: ['./found-result.page.scss'],
})
export class FoundResultPage implements OnInit {
 public array:any={
  
    icon:'chevron-back-outline',
    dress:'Dresses',
    found:'Found',
    found1:'152 result',
    fil:'Filter',
      icon1:'caret-down-outline',
  
  }
  public indx:any=[
 
  ]
  products: any;
  constructor(public router:Router,private location: Location,public dataService: DataService,private route: ActivatedRoute,public global: GlobalService,private globalService: GlobalService) { }
  ngOnInit() {
this.indx=this.dataService.getindx();
this.globalService.currentProducts.subscribe(products => {
  this.products = products;
});
  }
  next(product: any) {
    this.router.navigate(['/product'])
    this.global.det_getdata(product)
  }
  goBack() {
    this.location.back();
  }
  

}
