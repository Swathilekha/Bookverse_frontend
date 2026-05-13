import React, { useState, useEffect } from 'react';

const images = ['images5.jpeg', 'logbg3.jpg', 'images4.jpeg', 'images6.jpg'];

const Home = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [message, setMessage] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!userEmail) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (selectedPlan === 'free') {
      setMessage(`Thanks for choosing BookVerse. Login credentials have been sent to ${userEmail}.`);
    } else if (paymentConfirmed) {
      setMessage(`Thanks for choosing BookVerse. Login credentials for your plan have been sent to ${userEmail}.`);
    } else {
      setMessage('Please confirm payment to proceed.');
    }

    // Close the current modal and open confirmation modal
    setShowModal(false);
    setShowConfirmation(true);

    setTimeout(() => setShowConfirmation(false), 3000); // Close confirmation after 3 seconds
    setUserEmail('');
  };

  const handlePayment = () => {
    setPaymentConfirmed(true);
  };

  return (
    <div style={{ backgroundColor: '#e0f2f1' }}>
      {/* Hero Section (Unchanged) */}
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage: `url(${images[bgImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="bg-dark bg-opacity-75 py-5">
          <h1 className="fw-bold display-5">You're only one book away from a good mood</h1>
          <p className="lead px-3 mx-auto" style={{ maxWidth: '600px' }}>
            Dive into stories, share experiences, and explore imagination. Let each page turn take you to new emotional heights.
          </p>
          <button className="btn btn-light btn-lg mt-3 px-4" onClick={scrollToPlans}>
            View Plans
          </button>
          <p className="text-white-50 mt-2">2000+ books to explore</p>
        </div>
      </div>

      {/* Mid Section */}
      <div className="container py-5">
        <div className="row g-4 align-items-center">

          {/* Info Block */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#004d40' }}>Where the bookstore comes to you</h2>
            <p className="text-muted mb-4" style={{ color: '#004d40' }}>
              Explore a world of books from the comfort of your home. Whether you're a reader, writer, or publisher—BookVerse has something for you.
            </p>
          </div>

          {/* Testimonial Block */}
          <div className="col-md-6">
            <div className="border rounded-4 shadow p-4 bg-white h-100 text-center">
              <p className="fst-italic text-muted fs-5" style={{ color: '#004d40' }}>
                "BookVerse made it incredibly easy to discover books that match my mood. It's my favorite digital escape."
              </p>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <img src="logo2.jpeg" alt="Logo" className="me-2" style={{ height: '32px' }} />
                <small className="text-muted">by Logipsum</small>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subscription Sections */}
      <div id="plans-section" className="container pb-5">
        <div className="row g-4">

          {/* Plan Cards */}
          {[
            {
              title: '📖 Free Plan',
              desc: 'Access free books and community discussions.',
              items: ['Read classic and indie books', 'Join open book discussions'],
              price: '₹0/month',
              btnText: 'Join for Free',
              planType: 'free',
            },
            {
              title: '💬 Reader Discussion',
              desc: 'Join premium clubs and connect globally.',
              items: ['Weekly book club access', 'Live author sessions'],
              price: '₹99/month',
              btnText: 'Subscribe',
              planType: 'paid',
            },
            {
              title: '📝 Author Teaser',
              desc: 'Share stories and gain visibility.',
              items: ['Upload teasers and samples', 'Track views and responses'],
              price: '₹199/month',
              btnText: 'Subscribe',
              planType: 'paid',
            },
            {
              title: '🏢 Publisher Dashboard',
              desc: 'Discover authors and manage submissions.',
              items: ['Manage author submissions', 'Send responses and offers'],
              price: '₹299/month',
              btnText: 'Subscribe',
              planType: 'paid',
            },
          ].map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold mb-3" style={{ color: '#004d40' }}>{plan.title}</h5>
                  <p className="text-muted" style={{ color: '#004d40' }}>{plan.desc}</p>
                  <ul className="mb-3">
                    {plan.items.map((item, i) => <li key={i} style={{ color: '#004d40' }}>{item}</li>)}
                  </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-6" style={{ color: '#004d40' }}>{plan.price}</span>
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: '#004d40', color: '#fff' }}
                    onClick={() => handlePlanClick(plan.planType)}
                  >
                    {plan.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Modal for Email Input */}
      {showModal && (
        <div
          className="modal show d-block"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ backgroundColor: '#e8f5e9' }}>
              <div className="modal-header">
                <h5 className="modal-title">{selectedPlan === 'free' ? 'Free Plan' : 'Subscription Plan'}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {selectedPlan === 'free' ? (
                  <form onSubmit={handleEmailSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                  </form>
                ) : paymentConfirmed ? (
                  <form onSubmit={handleEmailSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                  </form>
                ) : (
                  <div>
                    <button className="btn btn-primary w-100" onClick={handlePayment}>Pay Now</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          className="modal show d-block"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ backgroundColor: '#e8f5e9' }}>
              <div className="modal-body">
                <p>{message}</p>
                <button
                  className="btn btn-success w-100"
                  onClick={() => setShowConfirmation(false)}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
