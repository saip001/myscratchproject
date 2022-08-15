import React, { useState } from "react";
import Icon from "./Icon";
import SidebarLooks from "./SidebarLooks";
import SidebarMotion from "./SidebarMotion";

export default function Sidebar(props) {
  let [value,setValue]=useState("v")
  let [motionValue,setMotionValue]=useState("v")
props.setId(value)
props.setIdMotion(motionValue);
  return (
    <div className="w-60 flex-none overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 px-3 py-3">
      <SidebarMotion setMotionValue={setMotionValue} setMarginLeft={props.setMarginLeft}  marginLeft={props.marginLeft}
      roatateClockWise={props.roatateClockWise} roatateAntiClockWise={props.roatateAntiClockWise}
      setRotateClockWise={props.setRotateClockWise} setRotateAntiClockWise={props.setRotateAntiClockWise}
      setPositionValue={props.setPositionValue}
          positionValue={props.positionValue}
          setxyArray={props.setxyArray}
          setGlidePositionValue={props.setGlidePositionValue}
          glidePositionValue={props.glidePositionValue}
          setGlideXYValues={props.setGlideXYValues}
      
      />
     
      <SidebarLooks  setValue={setValue} setDisplayCloud={props.setDisplayCloud} setLookMessage={props.setLookMessage}
       setFadeMessage={props.setFadeMessage}
       setFadeMessageSec={props.setFadeMessageSec}
       fadeMessageSec={props.fadeMessageSec}
       setLookThinkMessage={props.setLookThinkMessage}
       setFadeThinkMessage={props.setFadeThinkMessage}
       setFadeThinkMessageSec={props.setFadeThinkMessageSec}
       setSayFlag={props.setSayFlag}
       setThinlFlag={props.setThinlFlag}
       setSize={props.setSize}
       size={props.size}
       setShow={props.setShow}
      />
    
    </div>
  );
}
