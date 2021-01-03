import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AdminState } from './admin.state';

@NgModule({
  imports: [NgxsModule.forFeature([AdminState])],
  exports: [NgxsModule],
})
export class AdminStoreModule {}
