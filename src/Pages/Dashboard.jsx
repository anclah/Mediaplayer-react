import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

function Dashboard() {
  const [addStatus,setAddStatus]=useState({})
  return (
  <>
  <div>
    <h3 style={{textAlign:'center'}}>Dashboard</h3>
    <Row className='p-5'>
      <Col sm='1' md='1'>
        <Addvideos setAddStatus={setAddStatus}/>
      </Col>
      <Col sm='4' md='8'>
        <Videos addStatus={addStatus}/>
      </Col>
      <Col sm='2' md='3'>
        <Categories/>
      </Col>

    </Row>

<ToastContainer/>

      </div>
    </>

  )
}

export default Dashboard