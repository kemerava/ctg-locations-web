
export const fetchModal = (showModal = false) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_MODAL',
            showModal,
        });
    };
};