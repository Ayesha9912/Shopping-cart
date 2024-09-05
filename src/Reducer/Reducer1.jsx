const initialstate = {
    modal: false,
    data: {}, 
    sidebar: false
}
export const reducerModal = (state = initialstate, action)=>{
    if(action.type === "MODAL_FALSE"){
        return{
          ...state , modal: true,  data: action.payload
        }
    }
    else if(action.type === 'SIDEBAR_ON'){
        return{
            ...state ,  sidebar: true
        }
    }
    else if(action.type === 'MODAL_REMOVE'){
        return{
            ...state, modal: false, data: null
        }
    }
    else if(action.type === 'SIDEBAR_OFF'){
        return{
            ...state , sidebar: false
        }
    }
    else{
        return{
            ...state, modal: false, data: null , modal: false
        }
    }
}