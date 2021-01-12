import { Component, OnInit } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
})
export class LoadingOverlayComponent implements OnInit, ILoadingOverlayAngularComp {

  constructor() { }

  ngOnInit(): void {
    console.log("loading overlay init");
  }

  afterGuiAttached(){
    console.log("loading overlay attached to GUI");
  }
  
  agInit(params){
  }
}
