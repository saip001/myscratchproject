import React,{useRef, useState} from 'react';
import Sidebar from './Sidebar';
import MidArea from './MidArea';
import PreviewArea from './PreviewArea';
import SideNav from './SideNav';
function Dashboard(){
let [id,setId]=useState("v");
let [idmotion,setIdMotion]=useState("v");
let [marginLeft,setMarginLeft]=useState(0)
let [roatateClockWise,setRotateClockWise]=useState(0)
let [roatateAntiClockWise,setRotateAntiClockWise]=useState(0)
let [positionValue,setPositionValue]=useState([0,0,0,0])
let [xyArray,setxyArray]=useState([0,0])
let [glidePositionValue,setGlidePositionValue]=useState([0,0,0,0,0])
let [glideXYValues,setGlideXYValues]=useState([0,0,0])
let [displayCloud,setDisplayCloud]=useState(false)
let [lookMessage,setLookMessage]=useState("")
let [fadeMessage,setFadeMessage]=useState("")
let [fadeMessageSec,setFadeMessageSec]=useState(0)
let [lookThinkMessage,setLookThinkMessage]=useState("")
let [fadeThinkMessage,setFadeThinkMessage]=useState("")
let [fadeThinkMessageSec,setFadeThinkMessageSec]=useState(0)
let [sayFlag,setSayFlag]=useState(false)
let [thinkFlag,setThinlFlag]=useState(false)
let [size,setSize]=useState(0)
let [show,setShow]=useState(true)
    return(
        <main>
        <div class=" px-4 py-4 bg-blue-200">
        <a href="#" class="bg-gray-600 shadow-2xl text-white px-3 py-2 mb-3 rounded-md text-sm font-medium" aria-current="page">
            Code</a>
          <div class="py-2 px-0">
        
          <div className="h-screen overflow-hidden flex flex-row  py-3">
          
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-l border-gray-200 rounded-tr-xl mr-2">
          
          <SideNav id={id} idmotion={idmotion}/>
          <Sidebar  setId={setId} setIdMotion={setIdMotion} setMarginLeft={setMarginLeft} marginLeft={marginLeft} roatateClockWise={roatateClockWise} roatateAntiClockWise={roatateAntiClockWise}
          setRotateClockWise={setRotateClockWise} setRotateAntiClockWise={setRotateAntiClockWise}
          setPositionValue={setPositionValue}
          positionValue={positionValue}
          setGlidePositionValue={setGlidePositionValue}
          glidePositionValue={glidePositionValue}
          setxyArray={setxyArray}
          setGlideXYValues={setGlideXYValues}
          setDisplayCloud={setDisplayCloud}
          setLookMessage={setLookMessage}
          setFadeMessage={setFadeMessage}
          setFadeMessageSec={setFadeMessageSec}
          fadeMessageSec={fadeMessageSec}
          setLookThinkMessage={setLookThinkMessage}
          setFadeThinkMessage={setFadeThinkMessage}
          setFadeThinkMessageSec={setFadeThinkMessageSec}
          setSayFlag={setSayFlag}
          setThinlFlag={setThinlFlag}
          setSize={setSize}
          size={size}
          setShow={setShow}
          /> 
          
          <MidArea />
        </div>
        <div className="w-1/2 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 border-r border-d" >
          <PreviewArea 
          size={size}
           lookThinkMessage={lookThinkMessage}
           fadeThinkMessage={fadeThinkMessage}
           fadeThinkMessageSec={fadeThinkMessageSec}
           sayFlag={sayFlag}
           thinlFlag={thinkFlag}
           show={show}
          setFadeMessageSec={setFadeMessageSec} fadeMessage={fadeMessage} fadeMessageSec={fadeMessageSec} setDisplayCloud={setDisplayCloud}
          lookMessage={lookMessage} glideXYValues={glideXYValues} displayCloud={displayCloud}  glidePositionValue={glidePositionValue} xyArray={xyArray} marginLeft={marginLeft} roatateClockWise={roatateClockWise} roatateAntiClockWise={roatateAntiClockWise} positionValue={positionValue}/>
        </div>
      </div>
          </div>
        </div>
      </main>
    )
}
export default Dashboard