import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap, } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  public goTo(section: string){
    this.router.navigate(['/about',section])

  }
}
