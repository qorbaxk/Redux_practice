let initialState={
    count:0,
    id:"",
    password:""
}


function reducer(state=initialState,action){
    console.log("액션",action);

    // if(action.type==="INCREMENT"){
    //     return {...state,count:state.count+action.payload.num};
    //     //항상 리턴을 해줘야됨 카운트에 플러스 1을 한 값을 돌려준다
    //     //닷닷닷state 인 이유는 state가 여러개일수도 있으니가.
    //     //객체주소가 새로운객체냐 아니냐
    //     //객체를 복사하므로서 새로운객체를 전달
    //     //어? 안에 내용이 바뀌었나? 하고 봄
    //     //payload는 필요한 값을 넘겨주는것
    // }



    //회사마다 if문 쓰는곳 switch문 쓰는곳 다름
    switch(action.type){
        case "INCREMENT":
            return {...state, count:state.count + action.payload.num};
            
        case "LOGIN":
            return {...state,
                id:action.payload.id,
                password:action.payload.password}

        case "DECREMENT":
            return {...state, count:state.count - action.payload.num};
        default:
            return {...state};
    }

    // return {...state};
}


export default reducer