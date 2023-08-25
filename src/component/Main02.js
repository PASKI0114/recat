import { useState } from "react";

function Head(props){
    return(
        <header>
            {/*e=>이벤트*/}
            <h1><a href="/" onClick={(e)=>{
                //페이지 리로드를 하지 않게 하자
                e.preventDefault();
                //Head 컴포넌트에 onChangeMode를 실행
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>        
    );
}
function Article(props){
    return(
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function Nav(props){
    const arr=[];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        arr.push(
        <li key={t.id}>    {t.id},
           <a id={t.id} href={"/read/"+t.id} onClick={(e)=>{
             e.preventDefault();
             props.onChangeMode(e.target.id);//배열인경우
           }}>{t.title}</a>
            </li>);
        
    }
    return(
        <nav>
            <ol>
                {arr}
            </ol>
        </nav>
    );
}

function Create(props){
    return <article>
        <h2>Create</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onCreate(title,body);
        }}>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="body" placeholder="body" /></p>
            <p><input type="submit" value="Create" /></p>
        </form>
    </article>
}

export default function Main02(){

    const [top,setTop] = useState([
        {id:1, title:"HTML", body : "Hypertext Markup Languege"},
        {id:2, title:"CSS", body : "Cascading Style Sheets"},
        {id:3, title:"JS", body : "JavaScript"}
    ])


    const [mode,setMode] = useState('WELCOME');
    const [id,setId] = useState(null);
    const [nextId, setNextId] = useState(4);//배열의 초기값 넣어주기

    let content= null;
    
    
    //수정/삭제를 위한 변수(READ일때만 수정,삭제를 나오게)
    let contextControl = null;

    //id를 조작하기 위해서  useState를 사용하자
        if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello,WEB" />;
    }else if(mode === 'READ'){
        let title, body = null
        for (let i = 0; i < top.length; i++) {
          if(top[i].id === Number(id)){
            title = top[i].title; 
            body = top[i].body;
          }   
        }
        content = <Article title={title} body={body} />;
        //모드가 READ일때만 수정,삭제를 나오게하자
        //하나를 수정하기 위해서는 아이다기 팔요하다.
        contextControl = <li><a href={/upadte/+id}>Upadte</a></li>

    }else if(mode === 'CREATE'){
        //컴포넌트(꺽쇠초록) 옆에 있는건 무조건 props
        content = <Create onCreate={(_title,_body)=>{
            //input type에서 입력한 값을 받아서 배열처리
            const newTop = {id:nextId, title:_title, body:_body};

            //sueState에서 초기값이 배열이면 무조건 배열복사하자
            //top배열을 복사해서 newTops를 만든다.
            const newTops = [...top]
            //newTops에 파라미터로 넘어온 값을 배열로 만든 newTop 추가
            newTops.push(newTop);
            setTop(newTops)
            setMode('READ')
            setId(nextId)
            setNextId(nextId+1)
        }}/>
    }

    return(
        <div style={{marginLeft:"100px"}}>
            {/*컴포넌트, props*/}
            <Head title="WEB" onChangeMode={( )=>{
               // alert("head");
               setMode("WELCOME");
           }}/>
            <Nav topics={top} onChangeMode={(id)=>{
               // alert(id);
               setMode("READ");
               setId(id);

            }}/>
            {/*<Article title="Welcome" body="Hello,WEB" />*/}
            {content}
            <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode('CREATE');
            }}>Create</a>
            <p>
                {/*수정삭제*/}
                {contextControl}
            </p>
        </div>
    );
}