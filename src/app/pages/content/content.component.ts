import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  contentText: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
      if (this.id) {
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id: string | null): void {

    const resultBigCard = dataFake.bigCards.find(article => {
      return article.Id?.toString() === id;
    });

    const resultSmallCard = dataFake.smallCards.find(article => {
      return article.Id?.toString() === id;
    });

    if (resultBigCard) {
      this.contentTitle = resultBigCard.cardTitle;
      this.contentDescription = resultBigCard.cardDescription;
      this.photoCover = resultBigCard.photoCover;
      this.contentText = resultBigCard.contentText;
    }

    else if (resultSmallCard) {
      this.contentTitle = resultSmallCard.cardTitle;
      this.contentDescription = '';  // Se não tiver uma descrição para small cards
      this.photoCover = resultSmallCard.photoCover;
      this.contentText = resultSmallCard.contentText;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);  // Navega para a home
  }
}
