import React from 'react';
// import { ScaleLoader } from 'react-spinners'

const Loading = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
        >
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-primary"></div>
        </div>
    );
};

export default Loading;