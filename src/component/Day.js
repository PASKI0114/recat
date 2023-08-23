import dummy from "../db/data.json"

export default function Day(){
    //날짜가 1인것만 출력하기 위함
    const day = 3;
    const wordList = dummy.words.filter(k=>(k.day === day));
    return(
            <>
                <table>
                    <tbody>
                        {/*map은 배열의 요소를 하나씩 꺼내서 처리할때 사용, 
                        k는 배열에서 꺼내진 하나의 요소를 의미한다*/}
                        {wordList.map(k =>(
                        <tr key={k.id}>
                            <td>{k.eng}</td>
                            <td>{k.kor}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </>
         );
}