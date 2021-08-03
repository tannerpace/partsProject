import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goToList() {
    this.router.navigate(['list'])
  }
}
