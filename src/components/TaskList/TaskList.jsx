import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {

    return (
        <div id='tasklist' className=' flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
            {data.tasks.map((elem)=>{
               if(elem.active){
                return <AcceptTask/>
               }
               if(elem.newTask){
                return <NewTask/>
               }
               if(elem.CompleteTask){
                return  <CompleteTask/>
               }
               if(elem.FailedTask){
                return  <FailedTask/>
               }
            })}
       
       
        
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-purple-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-purple-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
        <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded' >High</h3>
                <h4 className='text-sm'>20 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe, sunt incidunt esse tenetur rem? Ut pariatur eius, autem dignissimos numquam, odit blanditiis officia molestias debitis soluta accusamus nesciunt quia!
            </p>
        </div>
       
     
    </div>
  )
}

export default TaskList