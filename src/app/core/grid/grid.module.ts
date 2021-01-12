import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridButtonComponent } from './grid-button/grid-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgGridModule } from 'ag-grid-angular';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';


@NgModule({
  declarations: [GridButtonComponent, LoadingOverlayComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AgGridModule.withComponents({
      button: GridButtonComponent,
      loading: LoadingOverlayComponent,
    }),
  ],
  exports: [AgGridModule],
  entryComponents: [GridButtonComponent, LoadingOverlayComponent],
})
export class GridModule { }
