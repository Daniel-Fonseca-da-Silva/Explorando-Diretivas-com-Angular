import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count = 0
  randomNumber = 0
  fruits = [
    {
      name: 'Banana',
      price: 5.79
    },
    {
      name: 'Peach',
      price: 4.50
    },
    {
      name: 'Apple',
      price: 2.20
    },
    {
      name: 'Cherry',
      price: 0.59
    },
    {
      name: 'Guava',
      price: 2.45
    },
    {
      name: 'Grape',
      price: 3.79
    }
  ]

  cars = [
    {
      name: 'Impala',
      year: 1960
    },
    {
      name: 'Honda Civic',
      year: 1998
    },
    {
      name: 'Subaru',
      year: 2000
    },
    {
      name: 'Ford Capri',
      year: 1985
    },
    {
      name: 'Cadillac DeVille',
      year: 1968
    },
    {
      name: 'Kaiser Carabela',
      year: 1961
    },
    {
      name: 'Ika Torino',
      year: 1960
    },
    {
      name: 'Dodge LeBaron',
      year: 1965
    }
  ]

  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++
      if(this.count === 15)
        clearInterval(interval)
    }, 1000)
    this.randomNumber = Math.floor(Math.random() * 11);
    console.log(this.fruits)
  }

}
