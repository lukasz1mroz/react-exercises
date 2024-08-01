import React from "react";

const itemReducer = (state, action) => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                items: action.items
            };
        case 'deleted':
            return {
                ...state,
                items: state.items.filter(item => item.id !== Number(action.item)),
                selectedItem: "",
            };
        case 'selected':
            return {
                ...state,
                selectedItem: action.item,
            };
        default:
            return state;
    }
}

export { itemReducer };