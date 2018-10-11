import { Injectable } from '@angular/core';
import { IdInfo } from '../domain/id-info';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  idInfo: IdInfo = {
    userId: 'test',
    idName: 'dino',
    idAddress: '广东省 深圳市 南山区',
    idNo: '360281197712103333',
    issuingOrg: '广东省 南山派出所'
  };
  constructor() { }
  getIdInfo(accNo: string): IdInfo {
    return this.idInfo;
  }
}
