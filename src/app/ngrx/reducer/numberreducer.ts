import { Action, createReducer, on } from "@ngrx/store";
import { increaseVal } from "../actions/numberactions";

import { noState, numberState } from "../state/nostate";


const _noIncrement = createReducer(numberState,
    on(increaseVal, state => {
        return { ...state, no: state.no + 10 }
    })
);

export function numberReducer(state: noState | undefined,action: Action){
return _noIncrement(state,action);
}