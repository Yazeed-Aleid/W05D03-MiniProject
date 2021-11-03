const initialState = {
   watchLater:[]
}

const WatchLaterReducer = (state = initialState , {type,payload})=>{

    switch (type) {
        case 'Add':
         return{
            watchLater:[...state.watchLater, payload]
         }
            
         case "Remove":
             return{
                watchLater:state.watchLater.filter((item)=>{
                    return(
                    item.id!==payload)
                    
                })
             }
        default:
            return state
            
    }


}
export default WatchLaterReducer

export const add = (payload)=>{
    
    return{
        type:'Add',
        payload:payload

    }
}
export const remove = (payload)=>{
    
    return{
        type:'Remove',
        payload:payload

    }
}

