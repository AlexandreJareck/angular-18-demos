import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../shared/components/card/card.component';
import { MOCK_CARDS } from '../../shared/components/card/card.mock';

interface Card {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
  buttonText: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [MatCardModule, MatButtonModule, CardComponent],
  standalone: true,
})
export class HomeComponent {
  cards: Card[] = MOCK_CARDS;
}
