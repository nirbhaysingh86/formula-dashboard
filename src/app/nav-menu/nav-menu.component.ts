import { Component, OnInit } from '@angular/core';
import { FormulaColumn1Component } from 'formula-column1';
import { FormulaColumn2Component } from 'formula-column2';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  

  ngOnInit() {
   
  }
   
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
