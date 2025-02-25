import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideos } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Addvideos({setAddStatus}) {
    const [show, setShow] = useState(false);
    const [video,setVideo]=useState({
    caption:'',url:'',image:''
    })

    const getdata=(e)=>{
      //const {sname,age}={sname:"hello",age:20}
      const {name,value}=e.target
      console.log(name,value)

      if(name==="caption"){
        setVideo({...video,caption:value})
      }
      if(name==="url"){
        let furl=value
        furl=furl.split("v=")
        console.log(furl)
        let vurl=`https://www.youtube.com/embed/${furl[1]}?si=Bh79vLZsDELyN62f&autoplay=1`
        console.log(vurl)
        setVideo({...video,url:vurl})
      }
      if(name==="image"){
        setVideo({...video,image:value})
      }

    }
    const handleUpload=async()=>{
      const {caption,url,image}=video
      if(!caption || !url || !image){
        toast.warning("Enter Valid Details!!")
      }
      else{
        //console.log(video)
        const res=await uploadVideos(video)
        console.log(res)
        if(res.status>=200 && res.status<300){
          setAddStatus(res.data)
          toast.success("video uploaded successfully")
          handleClose()
        }
        else{
          toast.error("video uploading failed")
        }
      }
    }
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <span className='btn' onClick={handleShow}>
      
      
    <i class="fa-solid fa-circle-plus fa-lg"></i>
      

    </span>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Datails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Caption</Form.Label>
        <Form.Control type="text" name='caption' onChange={(e)=>{getdata(e)}} placeholder="Enter Video Caption" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video URL</Form.Label>
        <Form.Control type="text" name='url' placeholder="Enter Youtube Video URL" onChange={(e)=>{getdata(e)}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name='image' placeholder="Enter Thumbanil Image URL" onChange={(e)=>{getdata(e)}}  />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
   
  )
}

export default Addvideos