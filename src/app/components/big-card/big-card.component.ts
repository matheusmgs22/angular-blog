import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
  @Input() Id!: number;
  @Input() cardTitle!: string;
  @Input() cardDescription!: string;
  @Input() photoCover!: string;
}
