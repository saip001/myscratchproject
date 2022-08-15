import React, { useState } from "react";
import Icon from "./Icon";
import SidebarMotion from "./SidebarMotion";

export default function SidebarLooks(props) {
    props.setValue(document.getElementById("looks"))
    let [sayMessage,setSayMessage]=useState("Hello!")
    let [say,setSay]=useState("Hello!")
    let [saySec,setSaySec]=useState(2)
    let [thinkMessage,setThinkMessage]=useState("Hello")
    let [think,setThink]=useState("Hello")
    let [thinkSec,setThinkSec]=useState(2)
    let [catSize,setCatSize]=useState(10)
    let [catPer,setCatPer]=useState(100)
  return (
    <div className="w-60 h-full flex-none overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200" id="looks">
    <div className="font-bold"> {"Looks"} </div>
    <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition" onClick={()=>{props.setDisplayCloud(true); props.setFadeMessage(say); props.setFadeMessageSec(saySec) ; props.setThinlFlag(false); props.setSayFlag(true) }}>
        {"Say"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={say} onChange={(event)=>setSay(event.target.value)}></input>
        </div>
         {"for"}
         <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={saySec} onChange={(event)=>setSaySec(event.target.value)}></input>
        </div>
        {"sec"}
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => { props.setDisplayCloud(true); props.setLookMessage(sayMessage); props.setFadeMessageSec(0); props.setThinlFlag(false); props.setSayFlag(true) }} >
        {"Say"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={sayMessage} onChange={(event)=>setSayMessage(event.target.value)}></input>
        </div>
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition" onClick={()=>{props.setDisplayCloud(true); props.setFadeThinkMessage(think); props.setFadeThinkMessageSec(thinkSec) ; props.setThinlFlag(true); props.setSayFlag(false)  }}>
        {"Think"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={think} onChange={(event)=>setThink(event.target.value)}></input>
        </div>
         {"for"}
         <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={thinkSec} onChange={(event)=>setThinkSec(event.target.value)}></input>
        </div>
        {"sec"}
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => { props.setDisplayCloud(true); props.setLookThinkMessage(thinkMessage); props.setFadeThinkMessageSec(0); props.setThinlFlag(true); props.setSayFlag(false) }} >
        {"Think"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={thinkMessage} onChange={(event)=>setThinkMessage(event.target.value)}></input>
        </div>
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setSize(props.size+catSize)} >
        {"change size by"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={catSize} onChange={(event)=>setCatSize(event.target.value)}></input>
        </div>
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setSize(1.5*Number(catPer)-150)} >
        {"Set size to"}
        <div class="px-2">
        <input type="text" class="w-12 rounded-lg text-black text-center" value={catPer} onChange={(event)=>setCatPer(event.target.value)}></input>
        </div>
        {"%"}
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setShow(true)} >
        {"Show"}
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setShow(false)} >
        {"Hide"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
        {"Switch to"}
        <div  className="text-black px-1">
        <select id="position" name="position" className="rounded-lg bg-blue-800 text-white">
  <option value="all around" >Costume1</option>
  <option value="left-right" >Costume2</option>
  </select>
        </div>
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setShow(false)} >
        {"Next Costume"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
        {"Switch to"}
        <div  className="text-black px-1">
        <select id="position" name="position" className="rounded-lg bg-blue-800 text-white">
  <option value="all around" >BackDrop1</option>
  <option value="left-right" >BackDrop2</option>
  </select>
        </div>
      </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition"onClick={() => props.setShow(false)} >
        {"Next BackDrop"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
        {"Go to"}
        <div  className="text-black px-1">
        <select id="position" name="position" className="rounded-lg bg-blue-800 text-white">
  <option value="all around" >Front Layer</option>
  <option value="left-right" >Back Layer</option>
  </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
      <input type="checkbox" id="xpos" name="xpos"  /> {"Costume"}
      <select id="position" name="position" className="rounded-lg bg-blue-800 text-white">
  <option value="all around" >Number</option>
  <option value="left-right" >Name</option>
  </select>
      
     </div>
    
     <div className="flex flex-row flex-wrap bg-blue-900 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
      <input type="checkbox" id="dir" name="dir" classname="rounded-md"  />size
      
     </div>
    </div>
  );
}
