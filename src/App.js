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
      none.push({
        value: list[i].value,
        state: 'none',
      })
      document.getElementById('none').innerHTML += '<div id="none' + none.length + '" class="listIndivide" onClick="UDF(\'none\',\'' + list[i].value + '\',' + none.length  + ')">' + list[i].value + '</div>'
      $('#noneInput' + none.length).val(list[i].value)
    }
    else if (list[i].state === "ready") {
      ready.push({
        value: list[i].value,
        state: 'ready',
      })
      document.getElementById('ready').innerHTML += '<div id="ready' + none.length + '" class="listIndivide" onClick="UDF(\'ready\',\'' + list[i].value + '\',' + none.length  + ')">' + list[i].value + '</div>'
      $('#readyInput' + ready.length).val(list[i].value)
    }
    else if (list[i].state === "ongoing") {
      ongoing.push({
        value: list[i].value,
        state: 'ongoing',
      })
      document.getElementById('ongoing').innerHTML += '<div id="ongoing' + none.length + '" class="listIndivide" onClick="UDF(\'ongoing\',\'' + list[i].value + '\',' + none.length  + ')">' + list[i].value + '</div>'
      $('#ongoingInput' + ongoing.length).val(list[i].value)
    }
    else if (list[i].state === "done") {
      done.push({
        value: list[i].value,
        state: 'done',
      })
      document.getElementById('done').innerHTML += '<div id="done' + none.length + '" class="listIndivide" onClick="UDF(\'done\',\'' + list[i].value + '\',' + none.length  + ')">' + list[i].value + '</div>'
      $('#doneInput' + done.length).val(list[i].value)
    }
  }

  localStorage.setItem('none', JSON.stringify(none))
  localStorage.setItem('ready', JSON.stringify(ready))
  localStorage.setItem('ongoing', JSON.stringify(ongoing))
  localStorage.setItem('done', JSON.stringify(done))
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
        <div style={{ width: '100%', minWidth: '850px', height: 'auto', display: 'inline-block', }}>
          <h1>Vanilla JS Drag&amp;Drop Todo List 구현 (50점)</h1><hr/>
        </div>
        <div style={{ width: '850px', height: 'auto', textAlign: 'left', display: 'inline-block', }}>
          <div style={{ fontSize: '22px', fontWeight: '700', }}>Todo List</div>
        </div><hr/>

        <div style={{ width: '100%', height: 'auto', display: 'flex', }}>
          <div style={{ width: '22%', minWidth: '170px', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', }}>상태 없음</span>
            </div>
            <div id='none'></div>
            <div id='AddFdd' style={{ textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var none = JSON.parse(localStorage.getItem('none'))
              none.push({
                value: "",
                state: "none",
              })
              localStorage.setItem('none', JSON.stringify(none))
              document.getElementById('none').innerHTML += '<div id="none' + none.length + '"><div class="listIndivide" onClick="AddF(\'none\',' + none.length + ')"><input id="noneInput' + none.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/></div></div>'
              console.log(none.length)
              $('#noneInput' + none.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '22%', minWidth: '170px',  height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'pink', }}>시작 전</span>
            </div>
            <div id='ready'></div>
            <div id='readyAdd' style={{  textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var ready = JSON.parse(localStorage.getItem('ready'))
              ready.push({
                value: "",
                state: "ready",
              })
              localStorage.setItem('ready', JSON.stringify(ready))
              document.getElementById('ready').innerHTML += '<div id="ready' + ready.length + '"><div class="listIndivide" onClick="AddF(\'ready\',' + ready.length + ')"><input id="readyInput' + ready.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/></div></div>'
              $('#readyInput' + ready.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '22%', minWidth: '170px',  height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'rgb(255, 248, 150)', }}>진행 중</span>
            </div>
            <div id='ongoing'></div>
            <div id='ongoingAdd' style={{  textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var ongoing = JSON.parse(localStorage.getItem('ongoing'))
              ongoing.push({
                value: "",
                state: "ongoing",
              })
              localStorage.setItem('ongoing', JSON.stringify(ongoing))
              document.getElementById('ongoing').innerHTML += '<div id="ongoing' + ongoing.length + '"><div class="listIndivide" onClick="AddF(\'ongoing\',' + ongoing.length + ')"><input id="ongoingInput' + ongoing.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/></div></div>'
              $('#ongoingInput' + ongoing.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '22%', minWidth: '170px', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'rgb(171, 255, 171)', }}>완료</span>
            </div>
            <div id='done'></div>
            <div id='doneAdd' style={{ textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var done = JSON.parse(localStorage.getItem('done'))
              done.push({
                value: "",
                state: "done",
              })
              localStorage.setItem('done', JSON.stringify(done))
              document.getElementById('done').innerHTML += '<div id="done' + done.length + '"><div class="listIndivide" onClick="AddF(\'done\',' + done.length + ')"><input id="doneInput' + done.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/></div></div>'
              $('#doneInput' + done.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '12%', minWidth: '170px', height: 'auto', }}>
          <div style={{textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }}>그룹 추가</span>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
