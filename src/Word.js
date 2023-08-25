import{useState} from "react";

export default function Word({word}){
    //보이다가 안보였다가 하기위해서
    //useState사용
    //isShow 상태값을 만들어주고, props로 word를 받아와
    //isShow가 true일때만 보이게 하자

    const [isShow,setIsShow] = useState(false);
    function toggleShow(){
        setIsShow(! isShow)
    }
    return(
        <tr>
        <td><input type="checkbox"/></td>    
        <td>{word.eng}</td>
        {/*둘다 true일떄 보인다*/}
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow} style={{marginRight:"20px"}}>뜻{isShow? '숨기기' : '보기' }</button>
            <button style={{color:"red"}}>삭제</button>
        </td>
        </tr>
    );
}