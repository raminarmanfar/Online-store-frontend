import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Component, OnInit } from '@angular/core';
import { UsersBackendService } from '../../services/users-backend.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private usersBackendService: UsersBackendService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.fetchQuoteInfo((quoteInfo: any) => {
      const delay = 10000;
      this.blockUI.start('Calculating...'); // Start blocking
    });
  }

  fetchQuoteInfo(callback: (result: any) => any) {
    const delay = 10000;
    this.blockUI.start('Calculating...'); // Start blocking
    this.usersBackendService.fetchAllUsers().subscribe((userInfo: any): any => {
      setTimeout(() => {
        this.blockUI.update('Calculating quotes...');
        console.log(userInfo);
      });
    });
  }
}
