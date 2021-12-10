import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, bookmarkIcon, infoStandardIcon, homeIcon } from '@cds/core/icon';

ClarityIcons.addIcons(bookmarkIcon, infoStandardIcon, homeIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed: any;

  constructor() { }

  ngOnInit(): void {
  }

}
