import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import $ from 'jquery';
window.$ = $;

//https://hianna.tistory.com/492

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
      document.getElementById('none').innerHTML += 
      '<div id = "none' + none.length + '" class="listIndivideBox" draggable="true" onDragStart="DragStartF(event,\'none\',' + none.length + ')" onDrag="DragF(event)" onDragEnd="DragEndF(event)">' + 
        '<div class="UboxSelect UboxSelectnone' + none.length + '" onClick="UpdateF(\'none\',\'' + list[i].value + '\',' + none.length + ')" onMouseOver="UDshowF(\'none\',' + none.length + ')" onMouseOut="UDhideF(\'none\',' + none.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectnone' + none.length + '" onClick="DeleteF(\'none\',' + none.length + ')" onMouseOver="UDshowF(\'none\',' + none.length + ')" onMouseOut="UDhideF(\'none\',' + none.length + ')">삭제</div>' +
        '<div class="listIndivide listIndividenone' + none.length + '">' + 
          '<div class="value">' + list[i].value + '</div>' + 
          '<div class="UDbox UDboxnone' + none.length + '" onMouseOver="UDshowF(\'none\',' + none.length + ')" onMouseOut="UDhideF(\'none\',' + none.length + ')">' + 
          '</div>' + 
        '</div>' + 
      '</div>'
      $('#noneInput' + none.length).val(list[i].value)
    }
    else if (list[i].state === "ready") {
      ready.push({
        value: list[i].value,
        state: 'ready',
      })
      document.getElementById('ready').innerHTML += 
      '<div id = "ready' + ready.length + '" class="listIndivideBox" draggable="true" onDragStart="DragStartF(event,\'ready\',' + ready.length + ')" onDrag="DragF(event)" onDragEnd="DragEndF(event)">' + 
        '<div class="UboxSelect UboxSelectready' + ready.length + '" onClick="UpdateF(\'ready\',\'' + list[i].value + '\',' + ready.length + ')" onMouseOver="UDshowF(\'ready\',' + ready.length + ')" onMouseOut="UDhideF(\'ready\',' + ready.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectready' + ready.length + '" onClick="DeleteF(\'ready\',' + ready.length + ')" onMouseOver="UDshowF(\'ready\',' + ready.length + ')" onMouseOut="UDhideF(\'ready\',' + ready.length + ')">삭제</div>' +
        '<div class="listIndivide listIndivideready' + ready.length + '">' + 
          '<div class="value">' + list[i].value + '</div>' + 
          '<div class="UDbox UDboxready' + ready.length + '" onMouseOver="UDshowF(\'ready\',' + ready.length + ')" onMouseOut="UDhideF(\'ready\',' + ready.length + ')">' + 
          '</div>' + 
        '</div>' + 
      '</div>'
      $('#readyInput' + ready.length).val(list[i].value)
    }
    else if (list[i].state === "ongoing") {
      ongoing.push({
        value: list[i].value,
        state: 'ongoing',
      })
      document.getElementById('ongoing').innerHTML += 
      '<div id = "ongoing' + ongoing.length + '" class="listIndivideBox" draggable="true" onDragStart="DragStartF(event,\'ongoing\',' + ongoing.length + ')" onDrag="DragF(event)" onDragEnd="DragEndF(event)">' + 
        '<div class="UboxSelect UboxSelectongoing' + ongoing.length + '" onClick="UpdateF(\'ongoing\',\'' + list[i].value + '\',' + ongoing.length + ')" onMouseOver="UDshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="UDhideF(\'ongoing\',' + ongoing.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectongoing' + ongoing.length + '" onClick="DeleteF(\'ongoing\',' + ongoing.length + ')" onMouseOver="UDshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="UDhideF(\'ongoing\',' + ongoing.length + ')">삭제</div>' +
        '<div class="listIndivide listIndivideongoing' + ongoing.length + '">' + 
          '<div class="value">' + list[i].value + '</div>' + 
          '<div class="UDbox UDboxongoing' + ongoing.length + '" onMouseOver="UDshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="UDhideF(\'ongoing\',' + ongoing.length + ')">' + 
          '</div>' + 
        '</div>' + 
      '</div>'
      $('#ongoingInput' + ongoing.length).val(list[i].value)
    }
    else if (list[i].state === "done") {
      done.push({
        value: list[i].value,
        state: 'done',
      })
      document.getElementById('done').innerHTML += 
      '<div id = "done' + done.length + '" class="listIndivideBox" draggable="true" onDragStart="DragStartF(event,\'done\',' + done.length + ')" onDrag="DragF(event)" onDragEnd="DragEndF(event)">' + 
        '<div class="UboxSelect UboxSelectdone' + done.length + '" onClick="UpdateF(\'done\',\'' + list[i].value + '\',' + done.length + ')" onMouseOver="UDshowF(\'done\',' + done.length + ')" onMouseOut="UDhideF(\'done\',' + done.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectdone' + done.length + '" onClick="DeleteF(\'done\',' + done.length + ')" onMouseOver="UDshowF(\'done\',' + done.length + ')" onMouseOut="UDhideF(\'done\',' + done.length + ')">삭제</div>' +
        '<div class="listIndivide listIndividedone' + done.length + '">' + 
          '<div class="value">' + list[i].value + '</div>' + 
          '<div class="UDbox UDboxdone' + done.length + '" onMouseOver="UDshowF(\'done\',' + done.length + ')" onMouseOut="UDhideF(\'done\',' + done.length + ')">' + 
          '</div>' + 
        '</div>' + 
      '</div>'
      $('#doneInput' + done.length).val(list[i].value)
    }
  }

  localStorage.setItem('none', JSON.stringify(none))
  localStorage.setItem('ready', JSON.stringify(ready))
  localStorage.setItem('ongoing', JSON.stringify(ongoing))
  localStorage.setItem('done', JSON.stringify(done))
  localStorage.setItem('number', 4)
}

function App () {
  axios.get('https://my-json-server.typicode.com/jaewoong2/recruiting/0', {
  }).then((response)=>{
    document.getElementById('listMain').innerHTML = 
    "<div id='listIndivideMainnone' class='listIndivideMain'>" +
      "<div class='listIndivideMainInner1'>" +
        "<span class='listIndivideMainInner2'>상태 없음</span>" +
      "</div>" +
      "<div id='none' class='listIndivideMainBox'></div>" +
      "<hr id='nonehr' class='hr'/>" +
      '<div id="noneAdd" class="listIndivideMainInner3" onDragOver="DragOverF(event, \'none\')" onDragLeave="DragLeaveF(event, \'none\')" onDragEnter="DragEnterF()" onDrop="DropF(event, \'none\')" onClick="GroupAddF(\'none\')">새로 만들기</div>' +
    "</div>" +
    "<div id='listIndivideMainready' class='listIndivideMain'>" +
      "<div class='listIndivideMainInner1'>" +
        "<span id='listIndivideMainInnerready' class='listIndivideMainInner2'>시작 전</span>" +
      "</div>" +
      "<div id='ready' class='listIndivideMainBox'></div>" +
      "<hr id='readyhr' class='hr'/>" +
      '<div id="readyAdd" class="listIndivideMainInner3" onDragOver="DragOverF(event, \'ready\')" onDragLeave="DragLeaveF(event, \'ready\')" onDragEnter="DragEnterF()" onDrop="DropF(event, \'ready\')" onClick="GroupAddF(\'ready\')">새로 만들기</div>' +
    "</div>" +
    "<div id='listIndivideMainongoing' class='listIndivideMain'>" +
      "<div class='listIndivideMainInner1'>" +
        "<span id='listIndivideMainInnerongoing' class='listIndivideMainInner2'>진행 중</span>" +
      "</div>" +
      "<div id='ongoing' class='listIndivideMainBox'></div>" +
      "<hr id='ongoinghr' class='hr'/>" +
      '<div id="ongoingAdd" class="listIndivideMainInner3" onDragOver="DragOverF(event, \'ongoing\')" onDragLeave="DragLeaveF(event, \'ongoing\')" onDragEnter="DragEnterF()" onDrop="DropF(event, \'ongoing\')" onClick="GroupAddF(\'ongoing\')">새로 만들기</div>' +
    "</div>" +
    "<div id='listIndivideMaindone' class='listIndivideMain'>" +
      "<div class='listIndivideMainInner1'>" +
        "<span id='listIndivideMainInnerdone' class='listIndivideMainInner2'>완료</span>" +
      "</div>" +
      "<div id='done' class='listIndivideMainBox'></div>" +
      "<hr id='donehr' class='hr'/>" +
      '<div id="doneAdd" class="listIndivideMainInner3" onDragOver="DragOverF(event, \'done\')" onDragLeave="DragLeaveF(event, \'done\')" onDragEnter="DragEnterF()" onDrop="DropF(event, \'done\')" onClick="GroupAddF(\'done\')">새로 만들기</div>' +
    "</div>"

    document.getElementById('none').innerHTML = ""
    document.getElementById('ready').innerHTML = ""
    document.getElementById('ongoing').innerHTML = ""
    document.getElementById('done').innerHTML = ""

    BuildFirstF(response.data)

  }).catch((error) => { console.log(error) })


  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', textAlign: 'center', }}>

          <div style={{ width: '100%', }}>
            <div class='top' style={{ textAlign: 'left', display: 'inline-block', }}>
              <h1>Vanilla JS Drag&amp;Drop Todo List 구현 (50점)</h1>
              <hr/>
            </div>
          </div>
          <div class='top' style={{ padding: '0px 0px 9px 0px', textAlign: 'left', display: 'inline-block', }}>
            <div style={{}}>
              <div style={{ fontSize: '22px', fontWeight: '700', float: 'left', background: 'blue' }}>Todo List</div>
              <div style={{ fontSize: '22px', fontWeight: '700', float: 'right', background: 'blue' }}>새로만들기</div>
              <div style={{ fontSize: '22px', fontWeight: '700', float: 'right', background: 'blue' }}>검색</div>
            </div>
          </div>
          <hr/>

          <div style={{ display: 'flex', overflowX:'auto', overflowY:'hidden', }} >
            <div id='listMain'></div>

            <div style={{ width: '12%', minWidth: '170px', height: 'auto', }}>
              <div id='groupAdd' style={{textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }} onClick={() => {
                var number = parseInt(localStorage.getItem('number'))+1
                localStorage.setItem('number', number)
                localStorage.setItem(number, JSON.stringify([]))
                document.getElementById('listMain').innerHTML += 
                "<div id='listIndivideMain" + number + "' class='listIndivideMain'>" +
                  "<div class='listIndivideMainInner1'>" +
                    "<span class='listIndivideMainInner2'>" + number + "</span>" +
                  "</div>" +
                  "<div id='" + number + "'></div>" +
                  "<hr id='" + number + "hr' class='hr'/>" +
                  '<div id="' + number + 'Add" class="listIndivideMainInner3" onDragOver="DragOverF(event, \'' + number + '\')" onDragLeave="DragLeaveF(event, \'' + number + '\')" onDragEnter="DragEnterF()" onDrop="DropF(event, \'' + number + '\')" onClick="GroupAddF(\'' + number + '\')">새로 만들기</div>' +
                "</div>"
              }}>
                <span style={{ textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }}>그룹 추가</span>
              </div>
            </div>

          </div>

      </div>
    </div>
  );
}

export default App;
