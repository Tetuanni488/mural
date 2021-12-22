import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-component-viwer',
  templateUrl: './component-viwer.component.html',
  styleUrls: ['./component-viwer.component.scss']
})
export class ComponentViwerComponent implements OnInit {
  
  public section: any;
  public isNoter : boolean = false;
  public isDeveloper : boolean = false;
  public isTutorial: boolean = false;
  public isDocs: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
  }

}
