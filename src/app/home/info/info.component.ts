import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  countDownDate = new Date("june 04, 2022 19:55:00").getTime();
  demo:any;
  x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / (1000));
    this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if(distance<0){
      clearInterval(this.x);
      this.demo = "Episode was shown already."
    }
  })

}
