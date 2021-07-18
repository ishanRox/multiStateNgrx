import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postState } from 'src/app/ngrx/state/poststate';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {

  constructor(private store: Store<{ postState: postState }>) { }

  ngOnInit(): void {
    this.store.select('postState').subscribe(e => console.log(e));
  }

}
