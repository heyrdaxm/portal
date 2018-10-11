import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdInfo } from '../domain/id-info';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private mockService: MockService) { }
  // getAccountState(): Observable<AccountState[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   return of(AccountState[]);
  // }
  getIdInfo(accNo: string): IdInfo {
      return this.mockService.getIdInfo(accNo);
  }

}
