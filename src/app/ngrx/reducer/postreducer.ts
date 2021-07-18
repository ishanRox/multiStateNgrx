import { Action, createReducer, on } from "@ngrx/store";
import { createPost } from "../actions/postactions";
import { postState } from "../state/poststate";


const postCreate = createReducer(postState,
    on(createPost, (state, action) => {
        return { posts: [...state.posts, action.post] }
    })
);

export function postReducer(state: postState | undefined, action: Action) {
    return postCreate(state, action);
}