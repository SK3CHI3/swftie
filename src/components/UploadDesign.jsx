import React, { useState, useRef } from 'react';
import './UploadDesign.css';

const UploadDesign = () => {
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      
      // Create a preview of the image
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleAddToCart = () => {
    if (fileName && description) {
      setShowModal(true);
      
      // Log the data format to be sent to the backend
      const dataToSend = {
        fileName: fileName,
        description: description,
        imageData: imagePreview
      };
      
      console.log('Data to be sent to backend:', dataToSend);
    } else {
      alert('Please upload a file and add a description');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="upload-container">
      <h2 className="title">MALE FASHION</h2>
      
      <div className="upload-section">
        <button className="upload-btn" onClick={handleUploadClick}>
          Upload Design
        </button>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        
        <div className="cloud-icon">
          <div className="cloud">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      
      <div className="file-info">
        <input 
          type="text" 
          value={fileName} 
          readOnly 
          placeholder="File Xcvd45 Dmg."
          className="file-name"
        />
        <button className="clear-btn" onClick={() => {
          setFileName('');
          setImagePreview(null);
        }}>X</button>
      </div>
      
      <div className="description-section">
        <label>Design Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="Enter your design description here..."
        ></textarea>
      </div>
      
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h3>Uploaded Design</h3>
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Uploaded design" />
              </div>
            )}
            <div className="modal-description">
              <p><strong>File Name:</strong> {fileName}</p>
              <p><strong>Description:</strong> {description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadDesign;
