const initialState = {
    searchV : [],searchWord:''
}
const searchReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case 'action':
            return{
            searchV:payload
            }
            break;
            
            case "save":
            return{
                searchWord:payload
            }
            break;
    
        default:
            return state;
    }
}
export default searchReducer 

export const resultAction = (searchWord)=>{
    return{
        type:'action',
        payload:searchWord
    }

} 

export const saveWord = (word)=>{
    return{
        type:'save',
        payload:word
    }

} 


