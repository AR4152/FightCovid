/* eslint-disable no-unused-expressions */
import { useEffect, useRef, useState } from "react"

import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [fileInput, setFileInput] = useState()
  const [maskImage, setMaskImage] = useState(null)
  const [imgFile, setImgFile] = useState(null)
  const imageSubmit = async (e) => {
    setLoading(true)
    if(e.target.files.length !== 0){

      // Preview Output
      const imageObjectURL = URL.createObjectURL(e.target.files[0]);
      console.log(imageObjectURL)
      setFileInput(imageObjectURL)

      // Send file as form data
      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      // Fetch from server
      const requestOptions = {
        method: 'POST',
        body: formData
      }
      fetch('/api/predict', requestOptions)
      .then(response => response.blob())
      .then(data => {
        console.log('recived data ', data)
        var imageUrl = URL.createObjectURL(data);
        setMaskImage(imageUrl)
        setLoading(false)
      })
      .catch(error => {
          setLoading(false)
          console.error('There was an error!', error);
      });
    }
  }
  const resetData = () => {
    setFileInput(null)
    setMaskImage(null)
  }
  return (
    <div className="homeWrapper">
    <div className="navHeader w-100">
      <div className="container py-2 d-flex align-items-center h-100">
        <img src="/assets/logo.png" alt="" />
      </div>
    </div>

    <div className="container">
      <div className="bodyWraper d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-8 d-flex flex-column align-items-start justify-content-center">
            <div>
              <h2 className="display-3 fw-bold">
                Upload the image
              </h2>
            </div>
            <div>
              <p>
                1. Upload your CT Scan report in PNG format
              </p>
            </div>
            <div>
              <p>
                2. Download the results
              </p>
            </div>
          </div>
          <div className="col-4">
            <div>
              {!loading && !fileInput &&
                <form>
                  <div className="d-flex justify-content-center align-items-center fileUploadWrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload me-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                      <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    <input type="file" name="file" accept="image/png" onChange={(e) => imageSubmit(e)} />
                  </div>
                </form>
              }
              {fileInput &&
              <img src={fileInput} alt="" width="300" />}
              {loading && !maskImage && <div>Processing...</div>}
              {maskImage &&
              <img src={maskImage} alt="" width="300" />}
              {fileInput && maskImage && 
                <button className="btn btn-primary mt-2 me-2" onClick={() => resetData()}>Reset Data</button>
              }
              {maskImage && 
                <a className="btn btn-secondary mt-2" href={maskImage} download>Download Image</a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
