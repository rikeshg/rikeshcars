import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})

export class LocationsComponent {
  Puppies: any;
  constructor(private service: LocationsService) {}

  ngOnInit() {
    this.service.getPuppies()
      .subscribe((response: any) => {
        this.Puppies = response;
      });
  }
}


