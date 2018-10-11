// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ManagementComponent } from './management.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AccountRoutingModule
    ],
    declarations: [
      ManagementComponent
    ]
  })
  export class AccountModule { }
