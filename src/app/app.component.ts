import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  box = 'Rikky';
  name = "";

 Puppy = {
 "Image":"../assets/Huskiesatrest.jpg",
  "Breed":"Husky",
 "Color":"Brown",
 "Age":"5 Months",
 "Price":3000,
  "Offer":200

};

}