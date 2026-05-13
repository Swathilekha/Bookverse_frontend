import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Dashboard = ({ userEmail, userPlan }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = ['free', 'discussion', 'teaser', 'publisher'];
  const upgradeOptions = plans.filter(plan => plans.indexOf(plan) > plans.indexOf(userPlan));

  const planBenefits = {
    free: ['Access free chapters', 'Join community events'],
    discussion: [
      'Access to exclusive author forums',
      'Participate in book discussions',
      'Get feedback from fellow readers',
    ],
    teaser: [
      'Read teaser chapters before release',
      'Access exclusive sneak peeks',
      'Priority discussion access',
    ],
    publisher: [
      'Full access to all books',
      'Upload your own books',
      'Monetize your content',
    ],
  };

  const loginHistory = [
    '2025-04-18 10:45 AM - Logged in',
    '2025-04-17 8:20 PM - Logged out',
    '2025-04-17 4:15 PM - Logged in',
  ];

  const handleUpgradeClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="dashboard-wrapper">
      <style>{`
        .dashboard-wrapper {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .hero-section {
          background-image: url('logbg7.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          height: 300px; /* Reduced height */
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 8px;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 8px;
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          max-width: 85%;
          padding: 20px;
        }

        .soft-green-title {
          color: #1e5631;
          font-weight: bold;
          font-size: 4rem;
          text-align: center;
        }

        .soft-green-text {
          color: #1e5631;
        }

        .quote {
          font-size: 1.4rem;
          font-style: italic;
          margin-top: 20px;
          text-align: center;
        }

        .soft-green-card {
          background-color: #e6f4ea;
          border-left: 6px solid #1e5631;
          box-shadow: 0 0 10px rgba(30, 86, 49, 0.3);
          margin-bottom: 20px;
        }

        .green-badge {
          background-color: #1e5631;
        }

        .soft-green-text {
          color: #1e5631;
        }

        .btn-dark-green {
          background-color: #1e5631;
          color: white;
          border: none;
        }

        .btn-dark-green:hover {
          background-color: #144421;
        }

        .btn-outline-dark-green {
          border-color: #1e5631;
          color: #1e5631;
        }

        .btn-outline-dark-green:hover {
          background-color: #1e5631;
          color: white;
        }

        .modal-content {
          border-left: 6px solid #1e5631;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="soft-green-title" style={{ color: 'white' }}>📚 Welcome to Your Dashboard</h1>
          <p className="lead soft-green-text" style={{ color: 'white' }}>
            You are logged in as <strong>{userEmail}</strong>.
          </p>
          <h5 className="soft-green-text" style={{ color: 'white' }}>
            Your current plan: <span className="badge green-badge text-capitalize">{userPlan}</span>
          </h5>
          <p className="quote" style={{ color: 'white' }}>"Your one-stop destination for books!"</p>
        </div>
      </div>

      {/* Plan Benefits */}
      <div className="card soft-green-card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title soft-green-text">Enjoy all the benefits of your <span className="text-capitalize">{userPlan}</span> plan:</h5>
          <ul className="list-group list-group-flush">
            {planBenefits[userPlan].map((benefit, index) => (
              <li key={index} className="list-group-item">{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profile Section */}
      <div className="card soft-green-card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title soft-green-text">👤 Your Profile</h5>
          <p className="soft-green-text"><strong>Email:</strong> {userEmail}</p>
          <p className="soft-green-text"><strong>Plan:</strong> {userPlan.charAt(0).toUpperCase() + userPlan.slice(1)}</p>
          <p className="soft-green-text"><strong>Login History:</strong></p>
          <ul className="list-group">
            {loginHistory.map((log, i) => (
              <li key={i} className="list-group-item">{log}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upgrade Options */}
      {upgradeOptions.length > 0 && (
        <div className="text-center">
          <h5 className="mb-3 soft-green-text">Upgrade Options:</h5>
          {upgradeOptions.map((plan, index) => (
            <button
              key={index}
              className="btn btn-outline-dark-green m-2"
              onClick={() => handleUpgradeClick(plan)}
            >
              Upgrade to {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
            </button>
          ))}
        </div>
      )}

      {/* Modal Dialog */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">
            Upgrade to {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To upgrade to the <strong>{selectedPlan}</strong> plan, you need to complete the payment process.</p>
          <p><strong>Features you'll unlock:</strong></p>
          <ul>
            {planBenefits[selectedPlan]?.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button className="btn-dark-green" onClick={() => alert(`Payment for ${selectedPlan} initiated!`)}>
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
