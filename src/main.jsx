import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import FreePlan from './pages/FreePlan.jsx';
import Discussion from './pages/Discussion.jsx';
import Publisher from './pages/Publisher.jsx';
import Teaser from './pages/Teaser.jsx';
import Profile from './pages/Profile.jsx';

// Main component
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPlan, setUserPlan] = useState(null);

  const navigate = useNavigate();

  const users = {
    'free@bookverse.com': { password: 'free123', plan: 'free' },
    'discussion@bookverse.com': { password: 'discussion123', plan: 'discussion' },
    'teaser@bookverse.com': { password: 'teaser123', plan: 'teaser' },
    'publisher@bookverse.com': { password: 'publisher123', plan: 'publisher' }
  };

  const handleLogin = (email, password) => {
    if (users[email] && users[email].password === password) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserPlan(users[email].plan);
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    setUserPlan(null);
    navigate('/');
  };

  const ProtectedRoute = ({ element, allowedPlans }) => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    if (allowedPlans.includes(userPlan)) {
      return element;
    }

    return <div className="text-center p-5"><h4>You need to upgrade your plan to access this page.</h4></div>;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">📚 BookVerse</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/free">Free Plan</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/discussion">Discussion</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teaser">Teaser</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/publisher">Publisher</Link></li>
                <li className="nav-item"><button className="btn btn-link text-light" onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
         path="/dashboard"
         element={
         <ProtectedRoute
           element={<Dashboard userEmail={userEmail} userPlan={userPlan} />}
           allowedPlans={['free', 'discussion', 'teaser', 'publisher']}
        />
        }
       />
        <Route path="/free" element={<ProtectedRoute element={<FreePlan />} allowedPlans={['free', 'discussion', 'teaser', 'publisher']} />} />
        <Route path="/discussion" element={<ProtectedRoute element={<Discussion />} allowedPlans={['discussion', 'teaser', 'publisher']} />} />
        <Route path="/teaser" element={<ProtectedRoute element={<Teaser />} allowedPlans={['teaser', 'publisher']} />} />
        <Route path="/publisher" element={<ProtectedRoute element={<Publisher />} allowedPlans={['publisher']} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} allowedPlans={['free', 'discussion', 'teaser', 'publisher']} />} />
      </Routes>
    </div>
  );
};

// Login component
// Login component
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const backgroundStyle = {
    backgroundImage: "url('logbg7.jpg')", // Replace with your preferred URL or local path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const cardStyle = {
    backgroundColor: '#e6f4ea', // soft green
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    padding: '30px',
    width: '100%',
    maxWidth: '450px'
  };

  const buttonStyle = {
    backgroundColor: '#064420', // dark green
    borderColor: '#064420'
  };

  const buttonHoverStyle = {
    backgroundColor: '#046c3c',
    borderColor: '#046c3c'
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 className="text-center mb-4">Login to BookVerse</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 text-white"
            style={buttonStyle}
            onMouseOver={e => e.target.style.backgroundColor = '#046c3c'}
            onMouseOut={e => e.target.style.backgroundColor = '#064420'}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


// Render the Main component inside BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
