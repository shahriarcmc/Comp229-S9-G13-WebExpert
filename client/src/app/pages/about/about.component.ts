// COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert
    

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../base-page/base-page.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 

    super(route);
  }

  override ngOnInit(): void {
  }

}

