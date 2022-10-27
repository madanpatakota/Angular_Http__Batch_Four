import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular_Http__Batch_Four';

  constructor(private httpService: HttpClient) {}

  jsonPlaceHolderAPI = 'https://jsonplaceholder.typicode.com/posts';

  myOwnResource  =  "http://localhost:8000/posts"

  myOwnProductsResouce = 'http://localhost:8000/Products';
  // i have taken the jsonplaceholder server related apis

  // i am goin to take the my own server related apis
  // creating the json server.(install json server)
  // install   ---  npm install -g json-server
  // run       ---- json-server --watch db.json

  //ng new _________
  //ng s --> run the angular application

  //1. this api is giving the data...
  //2. First of all i need to get the this url
  //3. We need to subscribe that.
  //4. All we can do by using the http service.
  // my server do't want the jsonplacehoder server relating things.

  // json server iam installing
  // this server is by default going to give us few apis
  // So i am going to use those apis

  userData: any = [];
  ngOnInit() {
    //  this.httpService.get(this.jsonPlaceHolderAPI).subscribe((reponse:any)=>{
    //       console.log ("Madan has connected to this reposnse", reponse);
    //       this.userData = reponse;
    //  })

    //  this.httpService.get(this.myOwnResource).subscribe((reponse:any)=>{
    //   console.log ("Madan has connected to this reposnse", reponse);
    //   this.userData = reponse;


    // i am going to take the static values....
    // Prepare one form which conatins the device and price controls

    // 

    //i can fetch the data ......
    this.httpService
      .get(this.myOwnProductsResouce)
      .subscribe((reponse:any) => {
        //console.log('Madan has connected to this reposnse', reponse);
        this.userData = reponse;
      });
  }


  //router
  //service
  //form
  //input output viewchild contentchild ngtemplatout ngtemplate ngcontent
  //ngcontainter 
  //ngfor ngstyle ngif ngswitch
  //obsevable
  //directives
  //pipes



  //httpservice


  evtSubmit(){
    let device = {
      "id" : "4",
      "Device" : "Dell",
      "Price" : "60000"
    }

    this.httpService
    .post(this.myOwnProductsResouce, device)
    .subscribe((reponse) => {
      console.log('Madan has connected to this reposnse', reponse);
      // this.userData = reponse;



      this.httpService
      .get(this.myOwnProductsResouce)
      .subscribe((reponse:any) => {
        //console.log('Madan has connected to this reposnse', reponse);
        this.userData = reponse;
      });



    });

  }
}
