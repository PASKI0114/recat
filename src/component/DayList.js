import dummy from "../db/data.json"

export default function DayList(){
    //console.log(dummy);
    //json같은 반복 처리할때는 주로 map을 사용합니다.
    return(
            <ul className="list_day">
                {dummy.days.map(day=> (
                    <li key={day.id}> Day {day.day}</li>
                ))}
            </ul>
         );
}