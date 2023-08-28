import style from './Main04.module.css'
import { createStore } from "redux";
import { Provider,useSelector, useDispatch } from 'react-redux'

//1.props에 대한 정보를 모두 삭제하자
//2.redux를 설치하자() :https://react-redux.js.org/introduction/getting-started
//npm install react-redux
//돔 모듈 오류시 npm install react-router-dom --save
//3. 임포트하기 import { createStore } from "react-redux"// npm install redux react-redux;
//4. store생성 
//5. createStore에 들어갈 reduser 함수(현재 state과 action을 인자로 받는다.)를 만들기
//6. react-redux를 사용하기 위해서 3가지 import하기: 
// import { Provider, useSelector, useDispatch } from 'react-redux'
// **Provider => 사용할 범위에 지정
// **useSelector => 어떤state값을 사용할지를 선택,
// **useDispatch => state값 변경

function reduser(currentState,action) {
    // const [number, setNumber] = useState(1) 과 같은 의미
    if (currentState === undefined) {
        return{number :4};
    }

    //현재상태복사=>newState
    const newState = {...currentState}
    //action으로 인해서 정보가 변경된다.
    if ((action.type === 'PLUS')) {
        newState.number++;
    }else if((action.type === 'MINUS')){
        newState.number--;
    }
    return newState;
}

const store = createStore(reduser);

export default function Main05() {
   // const [number, setNumber] = useState(1);

    return (
        <div id={style.container}>
            <h1>Root</h1>
            <div id={style.grid}>
                {/*Provider => 사용할 범위에 지정*/}
                <Provider store={store}>
                  <Left1/>
                  <Right1/>
                </Provider>
            </div>
        </div>
    );
}

function Left1(props) {
    return (
        <div>
            <h1>Left1</h1>
            <Left2 />
        </div>
    );
}

function Left2(props) {
    return (
        <div>
            <h1>Left2</h1>
            <Left3 />
        </div>
    );
}

function Left3(props) {
    //function f(state) {
    //    return state.number;
    //}
    //어떤 state값을 사용할지를 선택, 함수를 인자로 받는다
   // const number=useSelector(f)
   const number = useSelector((state)=> state.number);


    return (
        <div>
            <h1>Left3:{number}</h1>
        </div>
    );
}

function Right1(props) {
    return (
        <div>
            <h1>Right1</h1>
            <Right2/>
        </div>
    );
}

function Right2(props) {
    return (
        <div>
            <h1>Right2</h1>
            <Right3/>
        </div>
    );
}
function Right3(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Right3</h1>
            {/*버튼을 눌렀을때 reduser의 state 값이 변경된다 => useDispatche()*/}
            <input type='button' value='+' onClick={()=>{
                //실행할때의 약속어를 넣어준다.
                //약속어 확인은 if ((action.type === 'PLUS')) {
                dispatch({type:'PLUS'});
            }}/>
            <input type='button' value='-' onClick={()=>{
                //실행할때의 약속어를 넣어준다.
                //약속어 확인은 if ((action.type === 'PLUS')) {
                dispatch({type:'MINUS'});
            }}/>
        </div>
    );
}