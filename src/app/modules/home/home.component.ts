import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';
interface pay {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  constructor(){}
  ngOnInit():void{

  }
 
  tenure: pay[] = [
    {value: '0', viewValue: '3 Months'},
    {value: '1', viewValue: '6 Months'},
    {value: '2', viewValue: '12 Months'}
  ];
  quickcards = [
    {icon : '../../../assets/images/Get Paid Instantly.png' , title : 'Quick cash disbursement' , text : 'Get terms loans that your business needs within 72 hrs'},
    {icon : '../../../assets/images/Low interest rate.png' , title : 'Low-interest rate' , text : 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'},
    {icon : '../../../assets/images/Secure Payments.png' , title : 'Zero Paperwork' , text : 'Get started instantly by submitting only your basic details & bank statements'}
  ];
  quickcard = [
    {icon : '../../../assets/images/freelancer_feature_icon_6@1.5x.png' , title : 'Ace your business finances' , text : 'Manage banking, accounting & everything in between, on one platform'},
    {icon : '../../../assets/images/Covid.png' , title : 'Loans to fight COVID-19' , text : 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'},
  ];
  selectedtenure = this.tenure[1].value;
  gridsize: number = 0;
  gridsizeexpense : number = 0
  updateSetting(event) {
    this.gridsize = event.value;
  }
  updateSettingexpense(event) {
    this.gridsizeexpense = event.value;
  }
}
