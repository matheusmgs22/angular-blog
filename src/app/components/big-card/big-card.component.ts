import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

    @Input()
    photoCover: string = "";
    @Input()
    cardTitle: string ="";
    @Input()
    cardDescription: string="";

    ngOnInit(): void {

    }

}
