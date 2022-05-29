import { actions } from "../_constants";

export const videoActions = {
    videoOpenTrigger
};

function videoOpenTrigger(val) {
    return dispatch => dispatch({ type: actions.VIDEOOPEN, payload: val });
}