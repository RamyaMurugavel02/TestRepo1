import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmpt1',
  templateUrl: './cmpt1.component.html',
  styleUrls: ['./cmpt1.component.css']
})
export class Cmpt1Component implements OnInit {
  public name ="Ramya";
  s="/assets/aa.jpg";
  w="250";
  h="250";
  hi="ramya";
  fullname ="hello ramya";
  classname="tvm";
  able=true;
  
  constructor() { }

  ngOnInit(): void {
  }
     onClick()   
      {
        console.log("Button clicked");
        alert("Button works");
      }


  }


