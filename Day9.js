import React from 'react'

function Day9() {
  return (
    <>
       <div class="container">
         <section className="profile">
           {/* <img src="https://via.placeholder.com/150" alt="Profile Picture"> */}
           <h2>Your Name</h2>
           <p>Web Developer | Designer | Freelancer</p>
         </section>
                          
         <section className="projects">
           <h2>Projects</h2>
           <div class="project">
            <h3>Project 1</h3>
            <p>Description of the first project.</p>
           </div>
           <div class="project">
            <h3>Project 2</h3>
            <p>Description of the second project.</p>
           </div>
           <div className="project">
            <h3>Project 3</h3>
            <p>Description of the third project.</p>
           </div>
          </section>
    

          <section className="contact">
           <h2>Contact Me</h2>
           <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
           <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
           <p>GitHub: <a href="#">github.com/yourprofile</a></p>
          </section>
        </div>    

    </>
  )
}

export default Day9