import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ld } from '../../utils/lodash.exports';

interface __GridButtonParams {
  /** the icon to be used for this button
   *
   * @see @link [Material Icons](https://material.io/resources/icons/?style=baseline)
   */
  icon: string;
  /** executed when the button is clicked
   * @param row the row data of this button
   */
  onClick: (row) => any;
  /** return true if you want this button to be hidden
   * this method is executed only once when the component is first initialized by ag-grid
   * @param row the row data of this button
   */
  precalcHidden?:
    | boolean
    | Promise<boolean>
    | ((row) => boolean | Promise<boolean>);
}

export interface GridButtonParams {
  params: __GridButtonParams;
}

@Component({
  selector: 'app-grid-button',
  templateUrl: './grid-button.component.html',
  styleUrls: ['./grid-button.component.scss'],
})
export class GridButtonComponent implements OnInit, ICellRendererAngularComp {
  params: __GridButtonParams = {
    icon: '',
    onClick: () => null,
  };
  agParams: ICellRendererParams;

  _precalcHidden = false;
  set precalcHidden(val: GridButtonParams['params']['precalcHidden']) {
    if (ld.isFunction(val)) {
      Promise.resolve(val(this.agParams.node.data)).then(
        (val) => (this._precalcHidden = val)
      );
    } else {
      Promise.resolve(val).then((val) => (this._precalcHidden = val));
    }
  }

  constructor() {}

  agInit(agParams: ICellRendererParams & GridButtonParams) {
    this.params = agParams.params;
    this.agParams = agParams;

    if (this.params.precalcHidden) {
      this.precalcHidden = this.params.precalcHidden;
    }
  }

  refresh() {
    // do not do the refreshing
    return false;
  }

  ngOnInit(): void {}

  click() {
    this.params.onClick(this.agParams.node.data);
  }
}
