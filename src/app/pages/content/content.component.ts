import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
      if (this.id) {
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id: string | null): void {
    // Procurar nas duas listas de cards
    const resultBigCard = dataFake.bigCards.find(article => article.Id.toString() === id);
    const resultSmallCard = dataFake.smallCards.find(article => article.Id.toString() === id);

    // Se o card for encontrado entre os bigCards
    if (resultBigCard) {
      this.contentTitle = resultBigCard.cardTitle;
      this.contentDescription = resultBigCard.cardDescription;
      this.photoCover = resultBigCard.photoCover;
    }
    // Se o card for encontrado entre os smallCards
    else if (resultSmallCard) {
      this.contentTitle = resultSmallCard.cardTitle;
      this.contentDescription = '';  // Se você não tiver uma descrição para small cards, deixe vazio ou crie um fallback
      this.photoCover = resultSmallCard.photoCover;
    }
  }
}
