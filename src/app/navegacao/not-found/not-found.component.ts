import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  imports: [MatCardModule, MatIconModule],
  standalone: true,
  styleUrls: ['not-found.component.css'],
})
export class NotFoundComponent {}
