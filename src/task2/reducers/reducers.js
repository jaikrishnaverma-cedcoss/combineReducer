const InitialState={
   answer:0
}

export const addition=(state=InitialState,action)=>{
    switch(action.type){
        case "ADD":return {answer:parseInt(action.a)+parseInt(action.b)}
    break;
    case "CLR":return  {answer:0}
    break;
    default :return state;
    }}

export const substraction=(state=InitialState,action)=>{
    switch(action.type){
        case "SUB":return {answer:parseInt(action.a)-parseInt(action.b)}
    break;
    case "CLR":return  {answer:0}
    break;
    default :return state;
    }
    
}

export const division=(state=InitialState,action)=>{
    switch(action.type){
        case "DIV":return {answer:parseInt(action.a)/parseInt(action.b)}
    break;
    case "CLR":return  {answer:0}
    break;
    default:return state;
    }
}

export const multiplication=(state=InitialState,action)=>{
    switch(action.type){
        case "MUL":return {answer:parseInt(action.a)*parseInt(action.b)}
    break;
    case "CLR":return  {answer:0}
    break;
    default:return state;
    }
}

export const clearAnswer=(state=InitialState,action)=>{
    switch(action.type){
        case "CLR":return  {answer:0}
        break;
    default:return state;
    }
    
    }