import React from 'react';
import '../styles/footer.css';

const footer = () => {
  return (
      <footer>
          <div className="footerContainer">
              <h1>Are you ready to advance what's possible in education. </h1>
              <p>Then connect with us on social media.</p>
              <div className="footerLinks">
                  <ul>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-google"></i></li>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                  </ul>
              </div>
          </div>  
        </footer>
    )
}

export default footer