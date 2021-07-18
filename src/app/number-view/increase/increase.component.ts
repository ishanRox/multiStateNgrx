import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increaseVal } from '../../ngrx/actions/numberactions';
import { noState } from '../../ngrx/state/nostate';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  //we dont even need the type here because we dont subscribe and reducers are unique
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  increase(){
    this.store.dispatch(increaseVal());
  }
}
