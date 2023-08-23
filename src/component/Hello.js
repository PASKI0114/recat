import {useState} from "react";

//속성을 받아준다.
//props : object 
export default function Hello(props){
    //props는 강제로 변경할수없다
    //ex) props.age= 150; (X)
    const [name, setName] = useState('hong');

    //useState를 이용해서
    const [age,setAge] = useState(props.age); 

    const msg = props.age > 19 ? "성년" : "미성년"

    function changeName(){
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
        setAge(age + 5);
      }
    return(
        <div>
           <h1>{name}({age}) :{msg}</h1>
          <button onClick={changeName}>changeName</button>
        </div>
    )
}

