import { handleActions } from "redux-actions"

export default handleActions(
    {
        TOGGLE_SHOW_MODAL: (state, action) => {
            if (!(action.payload instanceof Error)) {
                return {
                    ...state,
                    showModal:!state.showModal
                }
            }
        },

    },
    {
        showModal:false
    }
)
