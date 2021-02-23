import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-kontakti',
  templateUrl: './kontakti.component.html',
  styleUrls: ['./kontakti.component.css']
})
export class KontaktiComponent implements OnInit {

  sharelink: string;


  constructor() {
  }


  ngOnInit(): void {
  }


  carSelect(carName) {
    if (carName == 'bmw') {
      this.sharelink = 'https://www.bmw.com/en/index.html';
      console.log(carName);
    } else if (carName == 'audi') {
      this.sharelink = 'https://www.audi.com/en.html';
    } else {
      this.sharelink = 'https://www.mercedes-benz.com/en/';
    }
  }

}





