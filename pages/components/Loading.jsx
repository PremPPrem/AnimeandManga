import React from "react";

export default function Loading() {
  return (
    <div className=" relative w-full flex justify-center items-center">
      <div className=" relative w-[200px] h-[200px] rounded-[50%] bg-[#101010] animate-loading before:absolute before:top-0 before:left-0 before:w-[50%] before:h-full before:bg-loadingLinear bg-loadingSize before:bg-no-repeat before:rounded-l-[100px] after:absolute after:top-0 after:left-[50%] after:w-[20px] after:h-[20px] after:bg-amber-custom after:rounded-[50%] after:z-10 after:shadow-loadingShadow after:translate-x-[-50%] ">
        <span className=" absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-[#101010] rounded-[50%]"></span>
      </div>
    </div>
  );
}
