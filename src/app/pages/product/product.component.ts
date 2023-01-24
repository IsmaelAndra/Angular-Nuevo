import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient: any;
  products: ProductModel[] = [];
  selectedProduct: UpdateProductDto = {title:'', price:0, description:''};
  constructor(private productHttpService: ProductHttpServiceService) {
    //this.initProduct();
  };


  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe
    (response => {
      this.products = response;
      console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.productHttpService.getOne(2).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"Tennis",
      price:20,
      description:"Ropa Deportiva / Jhonny Andrade",
      images:["https://sdfsdgsdhasjh"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"Gorras",
      price:25,
      description:"Ropa deportiva / Jhonny Andrade",
      images:["https://https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.update(30, data).subscribe(
      (response : any ) => {console.log(response);
      }
    );
  }

  editProduct(product: ProductModel){
    this.selectedProduct = product;
  }

  deleteProduct(id: ProductModel['id']){
    const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.destroy(id).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct(id);
  }

  // initProduct(){
  //   this.selectedProduct: UpdateProductDto = {title:'', price:0, description:''};
  // }

}