import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'screens/home/home.component.html',
  styleUrls: ['screens/home/home.component.css']
})
export class HomeComponent {
  title: string = "I'm a home component!";
}
