
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main01 from "./component/Main01";
import Main02 from "./component/Main02";
import Main03 from "./component/Main03";
import Main04 from "./component/Main04";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Main05 from "./component/Main05";
import Main06 from "./component/Main06";

//1.App을 BrowserRouter로 감싼다.
//현재 리액트설정，라우터 설정 있음（Link to가 있으면 Routes 무조건 있음)
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <h1>REACT 연습하기</h1>
          <hr/>
          <button style={{marginLeft:"20px"}}><Link to="/main01">Main01</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main02">Main02</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main03">Main03</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main04">Main04</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main05">Redux</Link></button>
          <button style={{marginLeft:"20px"}}><Link to="/main06">ReduxToolKit</Link></button>
      </div>
      <Routes>
          <Route path="/" />
          <Route path="/main01" element={<Main01/>}/>
          <Route path="/main02" element={<Main02/>}/>
          <Route path="/main03" element={<Main03/>}/>
          <Route path="/main04" element={<Main04/>}/>
          <Route path="/main05" element={<Main05/>}/>
          <Route path="/main06" element={<Main06 />}/>
          <Route path="/day/:day" element={<Day />}/>
          <Route path="/dayList" element={<DayList />}/>
          {/*이외에 url이 들어오면 받아들이는 페이지(꼭 맨아래)*/}
          <Route path="/*" element={<EmptyPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;