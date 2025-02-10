import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full  w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600  text-sm px-3 py-1 rounded">Category</h3>
        <h4 className="text-sm">20 Oct 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe,
        sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos
        numquam, odit blanditiis officia molestias debitis soluta accusamus
        nesciunt quia!
      </p>
      <div className="flex justify-between mt-4"> 
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
