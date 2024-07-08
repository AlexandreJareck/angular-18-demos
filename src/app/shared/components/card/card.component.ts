import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card.interface'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent {
  @Input() card!: Card;
}
