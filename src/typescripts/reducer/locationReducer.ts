import LocationReducerAction from "../class/LocationReducerAction";

const locationReducer = (
    state: string, 
    action: LocationReducerAction
) => {
    switch(action.type) {        
        case 'SET':
            return action.location;
        default:
            return state;
    }
}

export default locationReducer;