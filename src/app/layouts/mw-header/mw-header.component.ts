import { Component, OnInit,HostListener } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-mw-header',
  templateUrl: './mw-header.component.html',
  styleUrls: ['./mw-header.component.scss']
})
export class MwHeaderComponent implements OnInit {
  isSticky: boolean = false;
  constructor( private router: Router, public service: GlobalService ){}
  ngOnInit() {

  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 20;
  }

}
