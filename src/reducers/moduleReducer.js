const initialState = {
    modules:[]
}


const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "CREATE_MODULE_FOR_COURSE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "EDIT_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module: module)
            }
        case "DELETE_MODULE":
            return {
               ...state,
               modules: state.modules.filter(module => module._id != action.module._id)
            }
        default:
            return state;
    }
}

export default moduleReducer