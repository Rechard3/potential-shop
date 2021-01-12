import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridButtonComponent } from './grid-button/grid-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [GridButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AgGridModule.withComponents([GridButtonComponent]),
  ],
  exports: [AgGridModule],
  entryComponents: [GridButtonComponent],
})
export class GridModule { }
