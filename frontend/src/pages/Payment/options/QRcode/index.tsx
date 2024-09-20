import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imd from 'C:/ui/f-end/src/assets/QR.png';
import './index.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function QR() {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยน path

  const handleNext = () => {
    navigate('/Rating'); // เปลี่ยนเส้นทางไปที่ /Rating เมื่อกดปุ่ม
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f2f5" }}>
      <Card
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "20px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="card-wrapper"> {/* Add a wrapper div */}
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imd} />
            <Card.Body>
              <Card.Title>PromptPay QR-code</Card.Title>
              <Card.Text>
                {/* Add any additional text if needed */}
              </Card.Text>
              <Button variant="primary" onClick={handleNext}>ถัดไป</Button>
            </Card.Body>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default QR;
