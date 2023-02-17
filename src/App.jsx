import { useState } from 'react'
import './App.css'

function App() {
  const [activity , setactivity] = useState('')
  const [listData , setlistData] = useState([]);
  // console.log(activity)

  function addActivity(){
    setlistData((listData)=>{
       const updateList = [...listData , activity]
       setactivity("")
       console.log(updateList)
       return updateList
    })
  }
  function removeActivity(i){
    const updateListData = listData.filter((elem, id)=>{
      return i!=id;
    })
    setlistData(updateListData)
 }

 function removeall(){
  setlistData([])
 }
  return (
    <div className='body'>
      <div className="container">
          <div className="header">Todo List</div>
          <div className='add' >
          <input type="text" placeholder='Enter Task' value={activity} onChange={(e)=>setactivity(e.target.value)} />
           <button className='Add-btn' onClick={addActivity}><i class="fa-solid fa-plus"></i></button>

          </div>
       
          <div className='list-item'>
           {/* <p className='Instruction'>Here Is Your list</p> */}
           {
            listData!=[] && listData.map((data , i)=>{
              return (
                <div className='display'>
                <div className='show'>
                  <p key={i} className='showdata'>
                     <div className='listData'>{data}</div>  
                  </p>
                </div>
                      <button onClick={()=>removeActivity(i)} className='remove'><i class="fa-solid fa-trash"></i></button>
                </div>
               
              )
            })
           }
           </div>



           {listData.length>=2 && <button onClick={removeall}>Remove All</button>}
          
      </div>
    </div>
   
  )
}

export default App




