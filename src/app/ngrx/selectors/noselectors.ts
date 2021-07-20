import { createFeatureSelector, createSelector } from "@ngrx/store";
import { noState } from "../state/nostate";
import { postState } from "../state/poststate";

const getNumberState = createFeatureSelector<noState>('numberSharedState');

export const getNoChange = createSelector(getNumberState, state => state.no);


const getPostState = createFeatureSelector<postState>('postSharedState');

export const getpostChange = createSelector(getPostState, state => state.posts);