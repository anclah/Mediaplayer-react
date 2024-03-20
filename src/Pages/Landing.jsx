import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow '>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1>
            <p>Explore media player for youtube video upload and management.you can add and manage videos,categories and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-info'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img style={{ height: '420px' }} src="https://elfsight.com/wp-content/uploads/2021/04/social-feed-screenshot-3.jpg" className='img-fluid-shadow' alt="img" />
            

          </div>
        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-2 flex-row justify-content-between'>

          <div className="card" style={{ width: '18rem' }}>
            {/* <img src="..." className='card-img-top' alt=""/> */}
            <img className='card-img-top' src="https://codemyui.com/wp-content/uploads/2016/08/a-simple-upload-button-animation.gif" alt="..." />
            <div class="card-body">
              <h5 className='card-title'>Upload Videos</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            {/* <img src="..." className='card-img-top' alt=""/> */}
            <img className='card-img-top' src="https://i1.wp.com/codemyui.com/wp-content/uploads/2015/07/play-button-in-pure-css.gif" alt="..." />
            <div class="card-body">
              <h5 className='card-title'>Watch Videos</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            {/* <img src="..." className='card-img-top' alt=""/> */}
            <img className='card-img-top' style={{height:'150px', width:'235px'}} src="data:image/png;base64,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" alt="..." />
            <div class="card-body">
              <h5 className='card-title'>View History</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

    <div className='mt-5 row p-5 align-items-center'>
    <div className='col'>
      <h2>Simple,Fast & Secured</h2>
      <p style={{textAlign:"justify"}}>Media player 2024 is a platform for simple and faster youtube video uploading and management of video watch history too where you get a simple video player interface with the app itself.</p>

    </div>
    <div className='col'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fRQg_9ulGuI?si=Qe2Z_H619ePZOfiv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    </div>

    </>

  )
}

export default Landing