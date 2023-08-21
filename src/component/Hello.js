//javascript 에서 변수 설정: var(변수),>>> let(변수), const(상수)
//ES6이후, 이를 보완하기 위해 추가된 변수 선언 방식이 let과 const이다.
//-let: 일반적인 변수 -const : 상수

import World from "./World";

const Hello = function(){
    //jsx는 하나의 태그만 만들수있음, div로 묶어버리면 됨
    return(
        <div>
        <h2>Hello</h2>
        <World></World>
        </div>
    )
}

export default Hello;