import { createAction, props } from "@ngrx/store";


export const createPost = createAction('createPost',props<{post:string}>());