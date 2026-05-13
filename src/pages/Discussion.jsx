import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Card,
  ListGroup, InputGroup, FormControl, Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const genres = ['All', 'Classic', 'Mystery', 'Romance', 'Sci-Fi', 'Fantasy', 'Drama'];

const bookNews = [
  { title: 'New Harry Potter Illustrated Edition Released!', date: 'April 10, 2025' },
  { title: 'Booker Prize Winner Announced', date: 'April 5, 2025' },
  { title: 'Author of "Shadow Realms" to Visit India', date: 'April 2, 2025' },
];

const Discussion = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [discussion, setDiscussion] = useState('');
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handlePost = () => {
    if (discussion.trim()) {
      setMessages([...messages, {
        text: discussion,
        genre: selectedGenre,
        book: searchTerm.trim() ? searchTerm.trim() : null,
      }]);
      setDiscussion('');
    }
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedbackSubmitted(true);
      setFeedback('');
      setTimeout(() => setFeedbackSubmitted(false), 3000);
    }
  };

  return (
    <div style={{ backgroundColor: '#e6f4ea', minHeight: '100vh' }}>

      {/* Hero Section */}
      <div style={{
        backgroundImage: 'url("images6.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
        }}>
          <h1 className="display-4 fw-bold">📚 Book Discussion Zone</h1>
          <p className="lead">Dive into conversations, share insights, and stay updated!</p>
        </div>
      </div>

      <Container style={{ paddingBottom: '40px' }}>

        {/* Book News */}
        <Row className="mb-5">
          <Col md={12}>
            <Card style={{ borderLeft: '6px solid #064635' }}>
              <Card.Header style={{ backgroundColor: '#064635', color: 'white' }}>📢 Book News</Card.Header>
              <ListGroup variant="flush">
                {bookNews.map((news, idx) => (
                  <ListGroup.Item key={idx}>
                    <strong>{news.title}</strong> <span className="text-muted float-end">{news.date}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>

        {/* Search & Discussion */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title style={{ color: '#064635' }}>🎯 Search & Discuss</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Choose Genre</Form.Label>
                  <Form.Select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    {genres.map((g, idx) => (
                      <option key={idx} value={g}>{g}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Search Book</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="Enter book title..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Start a Discussion</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your thoughts..."
                    value={discussion}
                    onChange={(e) => setDiscussion(e.target.value)}
                  />
                </Form.Group>
                <div
                  style={{
                    backgroundColor: '#064635',
                    color: 'white',
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={handlePost}
                >
                  Post
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Chat Panel */}
          <Col md={6} id="chat">
            <Card>
              <Card.Header style={{ backgroundColor: '#064635', color: 'white' }}>💬 Chat Panel</Card.Header>
              <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {messages.length === 0 ? (
                  <p className="text-muted">No discussions yet. Start the conversation!</p>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={idx} className="mb-3">
                      <strong style={{ color: '#064635' }}>[{msg.genre}]</strong>
                      {msg.book && <span className="text-success"> on <strong>{msg.book}</strong></span>}:
                      <br />
                      {msg.text}
                    </div>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Feedback Section */}
        <Row>
          <Col md={12}>
            <Card style={{ borderLeft: '6px solid #064635' }}>
              <Card.Body>
                <Card.Title style={{ color: '#064635' }}>📝 Feedback</Card.Title>
                <Form onSubmit={(e) => { e.preventDefault(); handleFeedbackSubmit(); }}>
                  <Form.Group className="mb-3">
                    <Form.Label>Share your experience or suggestions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="We value your feedback..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </Form.Group>
                  <div
                    style={{
                      backgroundColor: '#064635',
                      color: 'white',
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={handleFeedbackSubmit}
                  >
                    Submit Feedback
                  </div>
                </Form>

                {feedbackSubmitted && (
                  <Alert variant="success" className="mt-3">
                    ✅ Your valuable feedback has been taken into account.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Discussion;
