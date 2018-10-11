import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../service/account.service';
import { IdInfo } from '../../domain/id-info';

@Component({
  templateUrl: './management.component.html'
})
export class ManagementComponent {
  idInfo: IdInfo;
  accNo: string;
  constructor(private accountService: AccountService) { }
  search(accNo: string): void {
    this.idInfo = this.accountService.getIdInfo(accNo);
  }

}




