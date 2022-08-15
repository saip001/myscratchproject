import React from "react";
import CatSprite from "./CatSprite";
import Cloud from "./Cloud";

export default function PreviewArea(props) {

  return (
    <div className="flex-1 h-full overflow-hidden flex flex-row  p-2 py-3" >
    
      <CatSprite show={props.show} size={props.size} marginLeft={props.marginLeft} roatateClockWise={props.roatateClockWise} roatateAntiClockWise={props.roatateAntiClockWise}
      positionValue={props.positionValue} xyArray={props.xyArray}  glidePositionValue={props.glidePositionValue} glideXYValues={props.glideXYValues}/>
 <Cloud  lookThinkMessage={props.lookThinkMessage}
           fadeThinkMessage={props.fadeThinkMessage}
           fadeThinkMessageSec={props.fadeThinkMessageSec}
           sayFlag={props.sayFlag}
           thinlFlag={props.thinlFlag}
 setFadeMessageSec={props.setFadeMessageSec} setDisplayCloud={props.setDisplayCloud} fadeMessage={props.fadeMessage} fadeMessageSec={props.fadeMessageSec} displayCloud={props.displayCloud} lookMessage={props.lookMessage}/>
    </div>
  );
}
