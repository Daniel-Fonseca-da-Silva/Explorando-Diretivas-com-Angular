import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count = 0
  randomNumber = 0

  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++
      if(this.count === 15)
        clearInterval(interval)
    }, 1000)

    this.randomNumber = Math.floor(Math.random() * 11);

  }

}
