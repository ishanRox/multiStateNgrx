import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { noState } from '../../ngrx/state/nostate';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public count!: Observable<noState>;

  constructor(private store: Store<{ numberSharedState: noState }>) { }

  ngOnInit(): void {
    this.count=this.store.select('numberSharedState');
  }

}
