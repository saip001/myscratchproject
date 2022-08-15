import React, { useRef, useState } from "react";
import Icon from "./Icon";

export default function SidebarMotion(props) {
    let [moveSteps,setMoveSteps]=useState(10);
    let [clockWiseDegree,setClockWiseDegree]=useState(15);
    let [antiClockWiseDegree,setAntiClockWiseDegree]=useState(15);
    let [position,setPosition]=useState("random")
    let [goToXY,setGoToXY]=useState([gotoX,gotoY])
    let [gotoX,setGoToX]=useState(0)
    let [gotoY,setGoToY]=useState(0)
    let [glidePosition,setGlidePosition]=useState("random")
    let [glidePostionSec,setGlidePostionSec]=useState(1)
    let [glideValues,setGlideValues]=useState([glidePosition,glidePostionSec])
    let [glideX,setGlideX]=useState(0)
    let [glideY,setGlideY]=useState(0)
    let [glideXYSec,setGlideXYSec]=useState(1)
    let [glideXYValues,setGlideXYValues]=useState([glideX,glideY,glideXYSec])
    let [pointDirection,setPointDirection]=useState(90)
    let [pointTowards,setPointTowards]=useState("random")
    let [changeX,setChangeX]=useState(0)
    let [changeY,setChangeY]=useState(0)
    let [setX,setSetX]=useState(0)
    let [setY,setSetY]=useState(0);
    let [edgeBounce,setEdgeBounce]=useState(false);
    let [rotationStyle,setRotationStyle]=useState("all around")
    let [xCheckPosition,setXCheckPosition]=useState(false)
    let [yCheckPosition,setYCheckPosition]=useState(false)
    let [dirCheckPosition,setDirCheckPosition]=useState(false)
props.setMotionValue(document.getElementById("motionId"))
console.log(glidePosition)

  return (
    <div className="w-60 flex-none  overflow-y-auto flex flex-col items-start  border-r border-gray-200" id="motionId">
      <div className="font-bold"> {"Motion"} </div>
      <div draggable="true"   className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" id="movePosition" onClick={()=>props.setMarginLeft(Number(props.marginLeft)+Number(moveSteps))}>
        {"Move"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={moveSteps} onChange={(event)=>setMoveSteps(event.target.value)}></input>
        </div>
         {"steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  onClick={()=>props.setRotateClockWise(Number(props.roatateClockWise)+Number(clockWiseDegree))}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={clockWiseDegree} onChange={(event)=>setClockWiseDegree(event.target.value)}></input>
        </div>
        {"degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  onClick={()=>props.setRotateAntiClockWise(Number(props.roatateAntiClockWise)+Number(antiClockWiseDegree))}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={antiClockWiseDegree} onChange={(event)=>setAntiClockWiseDegree(event.target.value)}></input>
        </div>
        {"degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  onClick={()=>
        position==="random"?props.setPositionValue([props.positionValue[0]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.positionValue[1]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.positionValue[2]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.positionValue[3]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),]):props.setPositionValue([0,0,0,0])}>
        {"go to"}
        <div  className="text-black px-2">
        <select id="position" name="position" className="rounded-lg bg-blue-400 text-white" onChange={()=>setPosition(document.getElementById('position').value)}>
  <option value="random" >random position</option>
  <option value="mouse" >mouse pointer</option>
  </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>props.setxyArray([gotoX,gotoY])}>
        {"go to x:"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={gotoX} onChange={(event)=>setGoToX(event.target.value)}></input>
        </div>
         {"y:"}
         <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={gotoY} onChange={(event)=>setGoToY(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>glidePosition==="random"?props.setGlidePositionValue(
        [glidePostionSec,
          props.glidePositionValue[0]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.glidePositionValue[1]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.glidePositionValue[2]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        props.glidePositionValue[3]+Math.floor(Math.random() * 50)-Math.floor(Math.random() * 25),
        ]
      ):props.setGlidePositionValue([glidePostionSec,0,0,0,0])}>
        {"glide"}
        <div class="px-1">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={glidePostionSec} onChange={(event)=>setGlidePostionSec(event.target.value)}></input>
        </div>
         {"secs to"}
         <div class="px-1">
         <select id="glideposition" name="position" className="rounded-lg bg-blue-400 text-white w-18" onChange={()=>setGlidePosition(document.getElementById('glideposition').value)}>
  <option value="random" >random</option>
  <option value="mouse" >mouse</option>
  </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>props.setGlideXYValues([glideXYSec,glideX,glideY])}>
        {"glide"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={glideXYSec} onChange={(event)=>setGlideXYSec(event.target.value)}></input>
        </div>
        {"to"}
         {" x:"}
         <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={glideX} onChange={(event)=>setGlideX(event.target.value)}></input>
        </div>
        {"y:"}
         <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={glideY} onChange={(event)=>setGlideY(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>props.setRotateClockWise(pointDirection+270)}>
        {"point in direction"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={pointDirection} onChange={(event)=>setPointDirection(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  onClick={()=>props.setPositionValue(pointTowards)}>
        {"point towards"}
        <div  className="text-black px-2">
        <select id="position" name="position" className="rounded-lg bg-blue-400 text-white">
  <option value="random" >random</option>
  <option value="mouse" >mouse</option>
  </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>setSetX(setX)}>
        {"set x to "}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={setX} onChange={(event)=>setSetX(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>setChangeX(changeX)}>
        {"Change x by"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={changeX} onChange={(event)=>setChangeX(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>setSetY(setY)}>
        {"set y to"}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={setY} onChange={(event)=>setSetY(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>setChangeX(changeX)}>
        {"change y by "}
        <div class="px-2">
        <input type="text" class="w-6 rounded-lg text-black text-center" value={changeY} onChange={(event)=>setChangeY(event.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button" onClick={()=>setEdgeBounce(!edgeBounce)}>
        {"set edge bounce"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  onClick={()=>setRotationStyle(rotationStyle)}>
        {"roatate style"}
        <div  className="text-black px-1">
        <select id="position" name="position" className="rounded-lg bg-blue-400 text-white">
  <option value="all around" onChange={(event)=>setPointTowards(event.target.value)}>all around</option>
  <option value="left-right" onChange={(event)=>setPointTowards(event.target.value)}>left-right</option>
  <option value="dont rotate" onChange={(event)=>setPointTowards(event.target.value)}>dont-roatate</option>
  </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
      <input type="checkbox" id="xpos" name="xpos" value={xCheckPosition} onClick={()=>setXCheckPosition(!xCheckPosition)} />x position
      
     </div>
     <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
      <input type="checkbox" id="ypos" name="ypos" classname="rounded-md" value={yCheckPosition} onClick={()=>setYCheckPosition(!yCheckPosition)} />y position
      
     </div>
     <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-md" type="button"  >
      <input type="checkbox" id="dir" name="dir" classname="rounded-md" value={dirCheckPosition} onClick={()=>setDirCheckPosition(!dirCheckPosition)} />y position
      
     </div>
    </div>
  );
}
