import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-colomn justify-content-center bg-light'>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media Player 2024</h4>
            <p style={{ textAlign: 'justify' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          <div className='col'>
            <h4>Links</h4>
            <Link to={'/'} style={{color:'black'}}>Landing</Link><br />
            <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link><br />
            <Link to={'/his'} style={{color:'black'}}>History</Link><br />
          </div>

          <div className='col'>
            <h4>References</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'black'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{color:'black'}}>React</a><br />
          </div>
        </div>
        </div>
        <div className='text-center'>
          <p> &copy; Media Player 2024</p>
        </div>

      
    </>

  )
}

export default Footer