import React, { useState } from 'react';

const Teaser = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFile] = useState(null);
  const [selectedTeaser, setSelectedTeaser] = useState(null);

  const bookTeasers = [
    { title: 'The Alchemist', teaser: 'Paulo Coelho’s "The Alchemist" is a philosophical novel about a young Andalusian shepherd named Santiago who is on a quest to find a treasure located in Egypt. The story speaks to the pursuit of one’s personal legend, and the idea that everything we seek is already within us.' },
    { title: 'The Great Gatsby', teaser: 'F. Scott Fitzgerald’s "The Great Gatsby" tells the story of Jay Gatsby, a wealthy man who is obsessed with the love of his life, Daisy Buchanan. Set in the Jazz Age, the novel explores themes of decadence, excess, and the American Dream.' },
    { title: '1984', teaser: 'George Orwell’s "1984" is a dystopian novel set in a totalitarian society controlled by "Big Brother." The protagonist, Winston Smith, struggles with the oppressive regime while seeking truth and individuality, making the novel a powerful commentary on surveillance and authority.' },
    { title: 'To Kill a Mockingbird', teaser: 'Harper Lee’s "To Kill a Mockingbird" is a coming-of-age story set in the racially segregated American South. Through the eyes of young Scout Finch, the novel addresses deep issues of racial inequality, injustice, and moral growth.' },
    { title: 'Pride and Prejudice', teaser: 'Jane Austen’s "Pride and Prejudice" centers around Elizabeth Bennet and her developing relationship with the proud but honorable Mr. Darcy. The novel explores themes of love, reputation, and class in early 19th century England.' },
    { title: 'Moby Dick', teaser: 'Herman Melville’s "Moby Dick" tells the story of Ishmael, a sailor aboard the whaling ship Pequod, commanded by the obsessed Captain Ahab. The book explores themes of obsession, revenge, and the dangers of blind pursuit.' },
    { title: 'War and Peace', teaser: 'Leo Tolstoy’s "War and Peace" is an epic novel set during the Napoleonic Wars. It chronicles the lives of several aristocratic families and explores themes of love, war, and the pursuit of meaning in life.' },
    { title: 'The Catcher in the Rye', teaser: 'J.D. Salinger’s "The Catcher in the Rye" follows the story of Holden Caulfield, a disillusioned teenager who narrates his experiences after being expelled from a prestigious prep school. The novel explores themes of alienation, identity, and the pain of growing up.' },
    { title: 'Brave New World', teaser: 'Aldous Huxley’s "Brave New World" is a dystopian novel that critiques the dangers of state-controlled consumerism and technological advancement. The novel portrays a world where people’s emotions and desires are artificially controlled.' },
    { title: 'Crime and Punishment', teaser: 'Fyodor Dostoevsky’s "Crime and Punishment" follows the troubled Raskolnikov, a young student who commits a murder in an attempt to justify his belief in being superior to others. The novel explores themes of morality, guilt, and redemption.' }
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadTeaser = () => {
    if (file) {
      alert(`Teaser uploaded as ${isPublic ? 'Public' : 'Private'} visibility`);
    } else {
      alert('Please select a file to upload');
    }
  };

  const handleTeaserSelect = (e) => {
    const selected = bookTeasers.find(teaser => teaser.title === e.target.value);
    setSelectedTeaser(selected ? selected.teaser : null);
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Publish with Confidence</h1>
          <p className="hero-subtitle">A secure platform to share your creative work</p>
        </div>
      </section>

      {/* Teaser Upload and View Section */}
      <section className="content-section teaser-upload-view">
        <div className="upload-view-container">
          {/* Teaser Upload */}
          <div className="upload-section">
            <h2>Upload Your Teaser</h2>
            <p className="description">
              Upload a teaser of your upcoming book and choose whether you'd like it to be publicly available or keep it private for selected readers.
            </p>
            <div className="form-group">
              <label htmlFor="teaserFile" className="form-label">Upload Teaser (PDF)</label>
              <input
                type="file"
                id="teaserFile"
                className="form-control"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </div>

            {/* Visibility Options */}
            <div className="form-group">
              <label className="form-label">Visibility</label>
              <div className="visibility-options">
                <label>
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    checked={isPublic}
                    onChange={() => setIsPublic(true)}
                  />
                  Public
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    checked={!isPublic}
                    onChange={() => setIsPublic(false)}
                  />
                  Private
                </label>
              </div>
            </div>

            <button className="btn btn-dark-green" onClick={handleUploadTeaser}>
              Upload Teaser
            </button>
          </div>

          {/* View Teasers Dropdown */}
          <div className="view-section">
            <h2>View Public Teasers</h2>
            <p className="description">Explore some book teasers before the full release.</p>
            <select
              className="form-control"
              onChange={handleTeaserSelect}
              defaultValue=""
            >
              <option value="" disabled>Select a book teaser</option>
              {bookTeasers.map((book, index) => (
                <option key={index} value={book.title}>
                  {book.title}
                </option>
              ))}
            </select>
            {selectedTeaser && (
              <div className="teaser-box">
                <h3>Teaser:</h3>
                <p>{selectedTeaser}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Our Platform Section */}
      <div className="why-choose">
        <h2>Why Choose Our Platform?</h2>
        <div className="why-choose-text">
          <p>Our platform provides a secure and supportive environment for authors to publish their work.</p>
          <p>You can share teasers, engage with readers, and build excitement for your book.</p>
          <p>Whether you want your content public or private, our platform offers flexibility and control.</p>
        </div>
      </div>

      <style>{`
        body {
          background-color: #e6f4ea; /* Soft green background */
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .hero-section {
          background-image: url('images5.jpeg'); /* Change this path to your actual background image */
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
          padding: 3rem 1rem; /* Reduced padding */
          margin-bottom: 1.5rem; /* Reduced margin */
          border-radius: 15px;
        }

        .teaser-upload-view {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }

        .upload-view-container {
          display: flex;
          gap: 2rem; /* Reduced gap between sections */
          justify-content: space-between;
          width: 100%;
        }

        .upload-section, .view-section {
          width: 48%;
          border-radius: 15px;
          border-left: 6px solid #154d29;
          background-color: #fff;
          padding: 2rem;
        }

        .upload-section h2, .view-section h2 {
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

        .visibility-options {
          display: flex;
          align-items: center;
        }

        .visibility-options label {
          margin-right: 1rem;
          font-size: 1rem;
        }

        .btn {
          padding: 0.8rem 1.5rem;
          background-color: #154d29;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .teaser-box {
          background-color: #d1e7d1;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1.5rem;
        }

        .why-choose {
          background-color: #e6f4ea;
          text-align: center;
          padding: 1.5rem 1rem; /* Reduced padding */
          border-radius: 15px;
          margin-top: -0.5rem; /* Slightly reduced margin-top */
        }

        .why-choose-text {
          margin-top: 1rem;
          font-size: 1.2rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Teaser;
