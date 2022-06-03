import React from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import InfoIcon from "@mui/icons-material/Info";
import SupportIcon from "@mui/icons-material/Support";

function TermsAndConditions() {
  return (
    <div className="">
      <div className="bg-white mt-4 border-top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 p-0">
              <a
                className="text-reset border text-decoration-none m-0 border-top-none text-center p-4 d-block"
                href="https://takenfree.com/terms"
              >
                <AssignmentIcon fontSize="large" style = {{color: '#ff0000'}} />
                <h4 className="h6 mt-3">Terms &amp; conditions</h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <a
                className="text-reset border text-decoration-none m-0 border-top-none text-center p-4 d-block"
                href="https://takenfree.com/returnpolicy"
              >
                <KeyboardReturnIcon fontSize="large" style = {{color: '#ff0000'}} />
                <h4 className="h6 mt-3">return policy</h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <a
                className="text-reset border text-decoration-none m-0 border-top-none text-center p-4 d-block"
                href="https://takenfree.com/supportpolicy"
              >
                <SupportIcon fontSize="large" style = {{color: '#ff0000'}} />
                <h4 className="h6 mt-3">Support Policy</h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <a
                className="text-reset border text-decoration-none m-0 border-top-none border-right text-center p-4 d-block"
                href="https://takenfree.com/privacypolicy"
              >
                <InfoIcon fontSize="large" style = {{color: '#ff0000'}} />
                <h4 className="h6 mt-3">privacy policy</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions