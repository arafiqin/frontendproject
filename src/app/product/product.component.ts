import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component
({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
{

  readData: any = [];
 
  constructor(
    private service: AppService
  ) { }

  ngOnInit(): void 
  {
    this.getAllData();
  }

  //Get All data

  getAllData()
  { 
    this.service.getAllData().subscribe((res: { data: any; })=>{
      console.log(res,"res==");
      this.readData = res. data;
    })
  }
}
