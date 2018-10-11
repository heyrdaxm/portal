import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: '账户'
      },
      children: [
        {
          path: 'management',
          component: ManagementComponent,
          data: {
            title: '账户管理'
          }
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule {}
