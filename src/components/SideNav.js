import React from "react";
import Icon from "./Icon";

export default function SideNav(props) {
  const handleClickLooks = () => {
    console.log("in ref")
  looks.scrollIntoView({behavior:'smooth', block: 'start'});
    console.log(props.id)
  };
  const handleClickMotion = () => {
console.log("in motion screen")
    motionId.scrollIntoView({behavior:'smooth', block: 'start'});

  };
  return (
    <div className="w-20 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-l border-r border-gray-200">
        <div class="py-2" type="button" onClick={handleClickMotion}>
         <div class="w-8 h-8 rounded-full  flex justify-center items-center bg-blue-500">
            </div>
        <div className="font-bold"> {"Motion"} </div>
        </div>
        <div class="py-2" type="button" onClick={handleClickLooks}>
         <div class="w-8 h-8 rounded-full  flex justify-center items-center bg-blue-900">
            </div>
        <div className="font-bold"> {"Looks"} </div>
        </div>
        <div class="py-2">
         <div class="w-8 h-8 rounded-full  flex justify-center items-center bg-yellow-500">
            </div>
        <div className="font-bold"> {"Controls"} </div>
        </div>
        <div class="py-2">
         <div class="w-8 h-8 rounded-full  flex justify-center items-center bg-yellow-400">
            </div>
        <div className="font-bold"> {"Events"} </div>
        </div>
      
    </div>
  );
}