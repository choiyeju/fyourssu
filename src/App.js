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
      '<div id = "none' + none.length + '" draggable="true" onDragStart="DragStartF(event)" onDrag="DragF(event)" onDragEnd="DragEndF(event)" onDrop="DropMF(event)">' + 
        '<div class="UboxSelect UboxSelectnone' + none.length + '" onClick="UpdateF(\'none\',\'' + list[i].value + '\',' + none.length + ')" onMouseOver="UDshowF(\'none\',' + none.length + ')" onMouseOut="UDhideF(\'none\',' + none.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectnone' + none.length + '" onClick="DeleteF(\'none\',' + none.length + ')" onMouseOver="UDshowF(\'none\',' + none.length + ')" onMouseOut="UDhideF(\'none\',' + none.length + ')">삭제</div>' +
        '<div class="listIndivide listIndividenone' + none.length + '" onMouseOver="BoxshowF(\'none\',' + none.length + ')" onMouseOut="BoxhideF(\'none\',' + none.length + ')">' + 
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
      '<div id = "ready' + ready.length + '">' + 
        '<div class="UboxSelect UboxSelectready' + ready.length + '" onClick="UpdateF(\'ready\',\'' + list[i].value + '\',' + ready.length + ')" onMouseOver="UDshowF(\'ready\',' + ready.length + ')" onMouseOut="UDhideF(\'ready\',' + ready.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectready' + ready.length + '" onClick="DeleteF(\'ready\',' + ready.length + ')" onMouseOver="UDshowF(\'ready\',' + ready.length + ')" onMouseOut="UDhideF(\'ready\',' + ready.length + ')">삭제</div>' +
        '<div class="listIndivide listIndivideready' + ready.length + '" onMouseOver="BoxshowF(\'ready\',' + ready.length + ')" onMouseOut="BoxhideF(\'ready\',' + ready.length + ')">' + 
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
      '<div id = "ongoing' + ongoing.length + '">' + 
        '<div class="UboxSelect UboxSelectongoing' + ongoing.length + '" onClick="UpdateF(\'ongoing\',\'' + list[i].value + '\',' + ongoing.length + ')" onMouseOver="UDshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="UDhideF(\'ongoing\',' + ongoing.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectongoing' + ongoing.length + '" onClick="DeleteF(\'ongoing\',' + ongoing.length + ')" onMouseOver="UDshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="UDhideF(\'ongoing\',' + ongoing.length + ')">삭제</div>' +
        '<div class="listIndivide listIndivideongoing' + ongoing.length + '" onMouseOver="BoxshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="BoxhideF(\'ongoing\',' + ongoing.length + ')">' + 
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
      '<div id = "done' + done.length + '">' + 
        '<div class="UboxSelect UboxSelectdone' + done.length + '" onClick="UpdateF(\'done\',\'' + list[i].value + '\',' + done.length + ')" onMouseOver="UDshowF(\'done\',' + done.length + ')" onMouseOut="UDhideF(\'done\',' + done.length + ')">수정</div>' +
        '<div class="DboxSelect DboxSelectdone' + done.length + '" onClick="DeleteF(\'done\',' + done.length + ')" onMouseOver="UDshowF(\'done\',' + done.length + ')" onMouseOut="UDhideF(\'done\',' + done.length + ')">삭제</div>' +
        '<div class="listIndivide listIndividedone' + done.length + '" onMouseOver="BoxshowF(\'done\',' + done.length + ')" onMouseOut="BoxhideF(\'done\',' + done.length + ')">' + 
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
}

function App () {

  var targetBox = ''; // 현재 선택된 div 
  var topPos = ''; // top 위치 
  var bottomPos = ''; // bottom 위치 
  var leftPos = ''; // left 위치 
  var rightPos = ''; // right 위치

  axios.get('https://my-json-server.typicode.com/jaewoong2/recruiting/0', {
  }).then((response)=>{
    document.getElementById('none').innerHTML = ""
    document.getElementById('ready').innerHTML = ""
    document.getElementById('ongoing').innerHTML = ""
    document.getElementById('done').innerHTML = ""

    BuildFirstF(response.data)

  }).catch((error) => { console.log(error) })

  function DragOverF (e) {
    $('#readyhr').css('display', 'block')
  }
  function DragLeaveF(e) {
    $('#readyhr').css('display', 'none')
  }
  function DragEnterF (e) {
    e.preventDefault()
    // console.log('enter')
  }
  function DropF (e) {
    e.preventDefault()
    console.log(e)
    console.log('drop')
  }

  return (
    <div className="App">
      <div id='a'></div>
      <div style={{ textAlign: 'center', }}>
        <div style={{ width: '100%', minWidth: '850px', height: 'auto', display: 'inline-block', }}>
          <h1>Vanilla JS Drag&amp;Drop Todo List 구현 (50점)</h1><hr/>
        </div>
        <div style={{ width: '850px', height: 'auto', textAlign: 'left', display: 'inline-block', }}>
          <div style={{ fontSize: '22px', fontWeight: '700', }}>Todo List</div>
        </div><hr/>

        <div style={{ width: 'auto', height: 'auto', display: 'flex', }}>
          <div style={{ width: '340px', minWidth: '340px', height: 'auto', }}>
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
              console.log(none)
              document.getElementById('none').innerHTML += 
              '<div id = "none' + none.length + '">' + 
                '<div class="listIndivide listIndividenone' + none.length + '" onClick="AddF(\'none\',' + none.length + ')" onMouseOver="BoxshowF(\'none\',' + none.length + ')" onMouseOut="BoxhideF(\'none\',' + none.length + ')">' + 
                  '<input id="noneInput' + none.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/ onMouseOver="BoxshowF(\'none\',' + none.length + ')" onMouseOut="BoxhideF(\'none\',' + none.length + ')">' +
                  '<div class="UDbox UDboxnone' + none.length + '">' +
                  '</div>' + 
                '</div>' +
              '</div>'
              $('#noneInput' + none.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '340px', minWidth: '340px', height: 'auto', }}>
            <div style={{ textAlign: 'left', height: '50px', padding: '0px 20px', lineHeight: '50px', }}>
              <span style={{ padding: '0px 7px', fontWeight: '600', backgroundColor: 'pink', }}>시작 전</span>
            </div>
            <div id='ready'></div>
            <hr id='readyhr' className='hr'/>
            <div id='readyAdd'  onDragOver={DragOverF} onDragLeave={DragLeaveF} onDragEnter={DragEnterF} onDrop={DropF} style={{  textAlign: 'left', height: '45px', margin: '10px 7px', padding: '0px 20px', lineHeight: '45px', color: 'rgb(150, 150, 150)', }} onClick={() => {
              var ready = JSON.parse(localStorage.getItem('ready'))
              ready.push({
                value: "",
                state: "ready",
              })
              localStorage.setItem('ready', JSON.stringify(ready))
              document.getElementById('ready').innerHTML += 
              '<div id = "ready' + ready.length + '" class="readyClass">' + 
                '<div class="listIndivide listIndivideready' + ready.length + '" onClick="AddF(\'ready\',' + ready.length + ')" onMouseOver="BoxshowF(\'ready\',' + ready.length + ')" onMouseOut="BoxhideF(\'ready\',' + ready.length + ')">' + 
                  '<input id="readyInput' + ready.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/ onMouseOver="BoxshowF(\'ready\',' + ready.length + ')" onMouseOut="BoxhideF(\'ready\',' + ready.length + ')">' +
                  '<div class="UDbox UDboxready' + ready.length + '">' +
                  '</div>' + 
                '</div>' +
              '</div>'
              $('#readyInput' + ready.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '340px', minWidth: '340px', height: 'auto', }}>
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
              document.getElementById('ongoing').innerHTML += 
              '<div id = "ongoing' + ongoing.length + '">' + 
                '<div class="listIndivide listIndivideongoing' + ongoing.length + '" onClick="AddF(\'ongoing\',' + ongoing.length + ')" onMouseOver="BoxshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="BoxhideF(\'ongoing\',' + ongoing.length + ')">' + 
                  '<input id="ongoingInput' + ongoing.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/ onMouseOver="BoxshowF(\'ongoing\',' + ongoing.length + ')" onMouseOut="BoxhideF(\'ongoing\',' + ongoing.length + ')">' +
                  '<div class="UDbox UDboxongoing' + ongoing.length + '">' +
                  '</div>' + 
                '</div>' +
              '</div>'
              $('#ongoingInput' + ongoing.length).focus()
            }}>새로 만들기</div>
          </div>
          
          <div style={{ width: '340px', minWidth: '340px', height: 'auto', }}>
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
              document.getElementById('done').innerHTML += 
              '<div id = "done' + done.length + '">' + 
                '<div class="listIndivide listIndividedone' + done.length + '" onClick="AddF(\'done\',' + done.length + ')" onMouseOver="BoxshowF(\'done\',' + done.length + ')" onMouseOut="BoxhideF(\'done\',' + done.length + ')">' + 
                  '<input id="doneInput' + done.length + '" class="listIndivideInput" type="text" placeholder="이름을 입력하세요"/ onMouseOver="BoxshowF(\'done\',' + done.length + ')" onMouseOut="BoxhideF(\'done\',' + done.length + ')">' +
                  '<div class="UDbox UDboxdone' + done.length + '">' +
                  '</div>' + 
                '</div>' +
              '</div>'
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
