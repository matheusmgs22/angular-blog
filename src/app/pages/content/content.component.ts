import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

    photoCover:string=""
    contentTitle:string=""
    contentDescription:string=""

    ngOnInit(): void {

    }
}
