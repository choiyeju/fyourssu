import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import $ from 'jquery';
window.$ = $;

function BuildFirstF(list) {
  var none = []
  var ready = []
  var ongoing = []
  var done = []

  for (var i = 0; i < list.length; i++) {
    if (list[i].state === "none"){
      document.getElementById('none').innerHTML += "<div class='listIndivide'>" + list[i].value + "</div>"
      none.push({
        value: list[i].value,
        state: 'none',
      })
    }
    else if (list[i].state === "ready") {
      document.getElementById('ready').innerHTML += "<div class='listIndivide'>" + list[i].value + "</div>"
      ready.push({
        value: list[i].value,
        state: 'ready',
      })
    }
    else if (list[i].state === "ongoing") {
      document.getElementById('ongoing').innerHTML += "<div class='listIndivide'>" + list[i].value + "</div>"
      ongoing.push({
        value: list[i].value,
        state: 'ongoing',
      })
    }
    else if (list[i].state === "done") {
      document.getElementById('done').innerHTML += "<div class='listIndivide'>" + list[i].value + "</div>"
      done.push({
        value: list[i].value,
        state: 'done',
      })
    }
  }

  localStorage.setItem('none', JSON.stringify(none));
  localStorage.setItem('ready', JSON.stringify(ready));
  localStorage.setItem('ongoing', JSON.stringify(ongoing));
  localStorage.setItem('done', JSON.stringify(done));
}

function App() {

  axios.get('https://my-json-server.typicode.com/jaewoong2/recruiting/0', {
  }).then((response)=>{
    document.getElementById('none').innerHTML = ""
    document.getElementById('ready').innerHTML = ""
    document.getElementById('ongoing').innerHTML = ""
    document.getElementById('done').innerHTML = ""

    BuildFirstF(response.data)

  }).catch((error) => { console.log(error) })

  return (
    <div className="App">
      <div style={{ textAlign: 'center', }}>
        <div style={{ width: '100%', minWidth: 'auto', height: 'auto', display: 'inline-block', }}>
          <h1>Vanilla JS Drag&amp;Drop Todo List 구현 (50점)</h1><hr/>
        </div>
        <div style={{ width: '660px', height: 'auto', textAlign: 'left', display: 'inline-block', }}>
          <div style={{ fontSize: '22px', fontWeight: '700', }}>Todo List</div>
        </div><hr/>

        <div style={{ width: '100%', height: 'auto', display: 'flex', }}>
          <div style={{ width: '22%', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', }}>상태 없음</span>
            </div>
            <div id='none'></div>
            <div id='noneAdd' style={{  textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var none = JSON.parse(localStorage.getItem('none'))
              none.push({
                value: "",
                state: "none",
              })
              localStorage.setItem('none', JSON.stringify(none))
              document.getElementById('none').innerHTML += "<div class='listIndivide'></div>"
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '22%', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'pink', }}>시작 전</span>
            </div>
            <div id='ready'></div>
          </div>
          
          <div style={{ width: '22%', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'rgb(255, 248, 150)', }}>진행 중</span>
            </div>
            <div id='ongoing'></div>
          </div>
          
          <div style={{ width: '22%', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'rgb(171, 255, 171)', }}>완료</span>
            </div>
            <div id='done'></div>
          </div>
          
          <div style={{ width: '12%', height: 'auto', background: 'yellow', }}>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
