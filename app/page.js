'use client'
import React,{ useState }  from 'react'


const page = () => {
  const[store,setstore]=useState('')

  const[disc,setdic]=useState('')

  const[mainTask,setmaintask]=useState([])



//   const SubmitHandler= (e)=>{
//     console.log('first');
//  e.preventDefault()
// setmaintask([...mainTask,{store,disc}])
//  setdic('')
//  setstore('')
//  console.log(mainTask);

//   }

const deletehandler=(i)=>{
  const copy=[...mainTask]
  copy.splice(i,1)
  setmaintask(copy)
}

  let renderTask=<h2>No task avilable </h2>
  if(mainTask.length>0 ){
    renderTask= mainTask.map((t,i)=>{
      return (
    // <li className='flex justify-around mb-5 items-cener'>
<div key={i} className='flex justify-around mb-5 items-cener'>
        
        <h5 className='text-xl font-semibold' key={i}>
          {t.store}
        </h5>
        <h6 key={i} className='text-xl font-semibold'> {t.disc}</h6>
        <button onClick={()=>{
          deletehandler(i)

        }} className='bg-red-400 px-4 py-2 rounded font-bold text-white '>Delete</button>
      </div>
        
    // </li>

        
      )
       
    
    })
  }
  else 'No task Avialable'
 



  return (
    <div>
      <h1 className='bg-black text-white text-5xl p-5 font-bold text-center'>My Todolist</h1>
      <form  className=
    'mr-5' onSubmit={(e)=>{
    console.log('first');
 e.preventDefault()
setmaintask([...mainTask,{store,disc}])
 setdic('')
 setstore('')
 console.log(mainTask);
  }}>
       <input type='text' className='text-2xl border-zinc-800 border-2 m-5 p-5 w-42'
       placeholder='Enter Your Task'
       value={store}
       onChange={(e)=>{
        setstore(e.target.value)

       }}
       
       />
       <input type='text' className='text-2xl border-zinc-800 border-2 m-5 p-5 w-42'
       placeholder='Enter Description Here'
       value={disc}
       onChange={(e)=>{
    //  console.log(e.target);
        setdic(e.target.value)
        // console.log(e.target.value);
        // console.log(disc);
     }}/>
       <button className='border-2 px-3  w-42   py-2 rounded text-xl font-bold ml-8 bg-black text-white'
       
       >Click Here to Add</button>
      </form>
    <hr/><div className='p-8 mt-1 bg-slate-500'>
      <ul>
        {
          renderTask
        }
      </ul>
    </div>
      <div>
        
      </div>
    </div>
  )
}

export default page