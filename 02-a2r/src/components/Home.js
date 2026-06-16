import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <div className="container my-5 p-5 bg-light rounded shadow">
    <h1 className="mb-4">Welcome to Our Website</h1>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    </p>

    <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <p>
        Our platform provides modern solutions for web development, UI/UX design,
        cloud services, and digital transformation. We focus on creating fast,
        responsive, and user-friendly applications.
    </p>


    <p>
        Our platform provides modern solutions for web development, UI/UX design,
        cloud services, and digital transformation. We focus on creating fast,
        responsive, and user-friendly applications.
    </p>
    <p>
        Our platform provides modern solutions for web development, UI/UX design,
        cloud services, and digital transformation. We focus on creating fast,
        responsive, and user-friendly applications.
    </p>
    

    <button className="btn btn-primary mt-3">
        Learn More
    </button>
</div>
    <Footer />
    </div>
  )
}

export default Home
