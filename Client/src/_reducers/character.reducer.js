import { actions } from "../_constants";

const initialState = {
    video_open: false,
};

export function chracter_reducer(state = initialState, action) {
    switch (action.type) {
        case actions.VIDEOOPEN:
            return {
                ...state, 
                video_open:action.payload
            };
        default:
            return state
    }
}