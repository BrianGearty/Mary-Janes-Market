import React, { useState, useEffect } from 'react';
import "../styles/AgeModal.css"

const Modal = () => {
  const [isShown, setIsShown] = useState(false);
  // eslint-disable-next-line
  const showModal = () => {
    setIsShown(true);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  const dynammicModalClass = () => (isShown ? { display: 'block' } : '');

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // return isShown ? <h3>Modal content</h3> : null;
  return isShown ? (
    <div className="modal" style={dynammicModalClass()} id="channelModal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-light text-center">Age Verification</h5>
          </div>

          <div className="modal-body">  <img src="../assets/Images/mj-modal-dark-bg.jpg" alt="marijuana-dark-bg" />
            <div className="row">
              {/* <div className="col-6">
              
              </div> */}

              <div className="col-12">
                <p className="text-light modal-text"><br></br>
                Mary Jane's Market products are only sold for use in New Jersey state where the sale and consumption of such products are soon to be legal. </p>
              
                <p className="text-light modal-text">I certify that I am over the age of 21 and will comply with the above statement.</p>
               
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={closeModal} type="button" className="btn btn-success btn-block">
          
                  I am over 21{' '}
              
            </button>
            <button  className="btn btn-danger btn-block">
              I'll come back when I'm old enough
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;