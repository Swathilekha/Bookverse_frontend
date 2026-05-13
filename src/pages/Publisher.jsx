import React, { useState } from 'react';

const Publisher = () => {
  const [selectedTeaser, setSelectedTeaser] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const bookTeasers = [
    { 
      title: 'The Alchemist', 
      author: 'Paulo Coelho',
      teaser: 'Paulo Coelho’s "The Alchemist" is a philosophical novel about a young Andalusian shepherd named Santiago who is on a quest to find a treasure located in Egypt. The story speaks to the pursuit of one’s personal legend, and the idea that everything we seek is already within us.'
    },
    { 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      teaser: 'F. Scott Fitzgerald’s "The Great Gatsby" tells the story of Jay Gatsby, a wealthy man who is obsessed with the love of his life, Daisy Buchanan. Set in the Jazz Age, the novel explores themes of decadence, excess, and the American Dream.'
    },
    { 
      title: '1984', 
      author: 'George Orwell', 
      teaser: 'George Orwell’s "1984" is a dystopian novel set in a totalitarian society controlled by "Big Brother." The protagonist, Winston Smith, struggles with the oppressive regime while seeking truth and individuality, making the novel a powerful commentary on surveillance and authority.'
    },
    { 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee',
      teaser: 'Harper Lee’s "To Kill a Mockingbird" is a coming-of-age story set in the racially segregated American South. Through the eyes of young Scout Finch, the novel addresses deep issues of racial inequality, injustice, and moral growth.'
    },
    { 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen',
      teaser: 'Jane Austen’s "Pride and Prejudice" centers around Elizabeth Bennet and her developing relationship with the proud but honorable Mr. Darcy. The novel explores themes of love, reputation, and class in early 19th century England.'
    },
    { 
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      teaser: 'Herman Melville’s "Moby Dick" tells the story of Ishmael, a sailor aboard the whaling ship Pequod, commanded by the obsessed Captain Ahab. The book explores themes of obsession, revenge, and the dangers of blind pursuit.'
    },
    { 
      title: 'War and Peace', 
      author: 'Leo Tolstoy', 
      teaser: 'Leo Tolstoy’s "War and Peace" is an epic novel set during the Napoleonic Wars. It chronicles the lives of several aristocratic families and explores themes of love, war, and the pursuit of meaning in life.'
    },
    { 
      title: 'The Catcher in the Rye', 
      author: 'J.D. Salinger', 
      teaser: 'J.D. Salinger’s "The Catcher in the Rye" follows the story of Holden Caulfield, a disillusioned teenager who narrates his experiences after being expelled from a prestigious prep school. The novel explores themes of alienation, identity, and the pain of growing up.'
    },
    { 
      title: 'Brave New World', 
      author: 'Aldous Huxley',
      teaser: 'Aldous Huxley’s "Brave New World" is a dystopian novel that critiques the dangers of state-controlled consumerism and technological advancement. The novel portrays a world where people’s emotions and desires are artificially controlled.'
    },
    { 
      title: 'Crime and Punishment', 
      author: 'Fyodor Dostoevsky', 
      teaser: 'Fyodor Dostoevsky’s "Crime and Punishment" follows the troubled Raskolnikov, a young student who commits a murder in an attempt to justify his belief in being superior to others. The novel explores themes of morality, guilt, and redemption.'
    }
  ];

  const handleTeaserSelect = (e) => {
    const selected = bookTeasers.find(teaser => teaser.title === e.target.value);
    setSelectedTeaser(selected ? selected : null);
  };

  const handleSupportClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Publisher Forum</h1>
          <p className="hero-subtitle">
            Our platform helps publishers discover new authors and find breakout hits through teasers and summaries.
          </p>
        </div>
      </section>

      {/* Publisher Forum Section */}
      <section className="content-section publisher-forum">
        <div className="view-section">
          <h2>Explore Book Teasers</h2>
          <p className="description">Browse through book teasers and summaries to support the next big hit.</p>
          <select
            className="form-control"
            onChange={handleTeaserSelect}
            defaultValue=""
          >
            <option value="" disabled>Select a book teaser</option>
            {bookTeasers.map((book, index) => (
              <option key={index} value={book.title}>
                {book.title} by {book.author}
              </option>
            ))}
          </select>

          {selectedTeaser && (
            <div className="teaser-box">
              <h3>Teaser:</h3>
              <p>{selectedTeaser.teaser}</p>
              <button 
                className="support-btn" 
                onClick={handleSupportClick}
              >
                Support
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dialog Section */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Thank you for your support!</h3>
            <p>Your support is more than welcomed!</p>
            <button onClick={handleCloseDialog}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        body {
          background-color: #e6f4ea;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .hero-section {
          background-image: url('logbg3.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-top: 10px;
        }

        .content-section {
          padding: 3rem 1rem;
          margin-bottom: 1.5rem;
          border-radius: 15px;
        }

        .publisher-forum {
          display: flex;
          justify-content: center;
        }

        .view-section {
          width: 70%;
          border-radius: 15px;
          background-color: #fff;
          padding: 2rem;
        }

        .view-section h2 {
          color: #154d29;
        }

        .description {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-weight: bold;
          color: #333;
        }

        .form-control {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .teaser-box {
          background-color: #d1e7d1;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1.5rem;
        }

        .support-btn {
          margin-top: 1rem;
          padding: 0.8rem 1.5rem;
          background-color: #154d29;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .support-btn:hover {
          background-color: #0f3b21;
        }

        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dialog-box {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }

        .dialog-box h3 {
          margin-bottom: 1rem;
        }

        .dialog-box button {
          padding: 0.8rem 1.5rem;
          background-color: #154d29;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .dialog-box button:hover {
          background-color: #0f3b21;
        }
      `}</style>
    </div>
  );
};

export default Publisher;
