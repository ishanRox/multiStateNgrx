import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createPost } from 'src/app/ngrx/actions/postactions';
import { postState } from 'src/app/ngrx/state/poststate';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private store: Store<{ postSharedState: postState }>) { }

  ngOnInit(): void {
    this.store.subscribe(e=>console.log(e.postSharedState))
  }

  post(post: string) {
    this.store.dispatch(createPost({post:post}));
    console.log(post);
  }
}
