import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApi'
import { deleteHistory } from '../services/allApi'


function History() {
  const [delHis,setDelHis]=useState({})
  const [his,setHis]=useState([])
  useEffect(()=>{
    getData()
  },[delHis])
  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
  }

  const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteHistory(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setDelHis(res)
      toast.success("video deleted successfully")
    }
    else{
      toast.error("video deleted failed")
    }
  }


  return (
    <>
     <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bordered'>
       <tr>
        <th>Caption</th>
        <th>Url</th>
        <th>Date & Time</th>
        <th></th>
       </tr>
       {
      his?
      his.map(item=>(
       <tr>
        <td>{item.caption}</td>
        <td>{item.url}</td>
        <td>{item.datetime}</td>
        <td>
      
        <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#000205'}}></i>
        </td>
       </tr>
      ))
      :
       
<tr>
  <p className='text-danger'>No watch history!!</p>
</tr>
       }
        
       
      </table>
 
</div>
    </>
   
  )
}

export default History