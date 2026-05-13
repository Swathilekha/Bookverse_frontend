import React, { useState } from 'react';
import { Card, Col, Row, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", theme: "Classic" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", theme: "Drama" },
  { title: "1984", author: "George Orwell", theme: "Dystopia" },
  { title: "Pride and Prejudice", author: "Jane Austen", theme: "Romance" },
  { title: "Moby-Dick", author: "Herman Melville", theme: "Adventure" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", theme: "Classic" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", theme: "Fantasy" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", theme: "Dystopia" },
  { title: "Brave New World", author: "Aldous Huxley", theme: "Dystopia" },
  { title: "Wuthering Heights", author: "Emily Brontë", theme: "Romance" },
  { title: "Jane Eyre", author: "Charlotte Brontë", theme: "Classic" },
  { title: "The Odyssey", author: "Homer", theme: "Epic" },
  { title: "The Road", author: "Cormac McCarthy", theme: "Post-Apocalyptic" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", theme: "Psychological" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", theme: "Fantasy" },
  { title: "The Divine Comedy", author: "Dante Alighieri", theme: "Epic" },
  { title: "Catch-22", author: "Joseph Heller", theme: "War" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", theme: "Philosophical" },
  { title: "Les Misérables", author: "Victor Hugo", theme: "Historical" },
  { title: "War and Peace", author: "Leo Tolstoy", theme: "Historical" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", theme: "Gothic" },
  { title: "The Scarlet Letter", author: "Nathaniel Hawthorne", theme: "Historical" },
  { title: "The Metamorphosis", author: "Franz Kafka", theme: "Existential" },
  { title: "Anna Karenina", author: "Leo Tolstoy", theme: "Romance" },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", theme: "Modernism" },
  { title: "The Grapes of Wrath", author: "John Steinbeck", theme: "Social" },
  { title: "Of Mice and Men", author: "John Steinbeck", theme: "Tragedy" },
  { title: "The Outsiders", author: "S.E. Hinton", theme: "Teen Fiction" },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", theme: "Dystopia" },
  { title: "A Clockwork Orange", author: "Anthony Burgess", theme: "Dystopia" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", theme: "Science Fiction" },
  { title: "The Shining", author: "Stephen King", theme: "Horror" },
  { title: "Dracula", author: "Bram Stoker", theme: "Gothic" },
  { title: "Frankenstein", author: "Mary Shelley", theme: "Gothic" },
  { title: "The Great Alone", author: "Kristin Hannah", theme: "Historical Fiction" },
  { title: "Big Little Lies", author: "Liane Moriarty", theme: "Drama" },
  { title: "The Silent Patient", author: "Alex Michaelides", theme: "Thriller" },
  { title: "The Night Circus", author: "Erin Morgenstern", theme: "Fantasy" },
  { title: "Where the Crawdads Sing", author: "Delia Owens", theme: "Mystery" },
  { title: "Little Fires Everywhere", author: "Celeste Ng", theme: "Drama" },
  { title: "Normal People", author: "Sally Rooney", theme: "Romance" },
  { title: "The Underground Railroad", author: "Colson Whitehead", theme: "Historical Fiction" },
  { title: "The Goldfinch", author: "Donna Tartt", theme: "Literary Fiction" },
  { title: "The Nightingale", author: "Kristin Hannah", theme: "Historical Fiction" },
  { title: "The Help", author: "Kathryn Stockett", theme: "Historical Fiction" },
  { title: "Educated", author: "Tara Westover", theme: "Memoir" },
  { title: "Becoming", author: "Michelle Obama", theme: "Memoir" },
  { title: "The Book Thief", author: "Markus Zusak", theme: "Historical Fiction" },
  { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", theme: "Romance" },
  { title: "Circe", author: "Madeline Miller", theme: "Fantasy" },
  { title: "The Rosie Project", author: "Graeme Simsion", theme: "Romance" },
  { title: "The Wife Between Us", author: "Greer Hendricks & Sarah Pekkanen", theme: "Thriller" },
  { title: "Before We Were Strangers", author: "Renée Carlino", theme: "Romance" },
  { title: "It Ends with Us", author: "Colleen Hoover", theme: "Romance" },
  { title: "The Hating Game", author: "Sally Thorne", theme: "Romance" },
  { title: "The Flatshare", author: "Beth O'Leary", theme: "Romance" },
  { title: "The Midnight Library", author: "Matt Haig", theme: "Fantasy" },
  { title: "The Alice Network", author: "Kate Quinn", theme: "Historical Fiction" },
  { title: "The Girl on the Train", author: "Paula Hawkins", theme: "Thriller" },
  { title: "Sharp Objects", author: "Gillian Flynn", theme: "Thriller" },
  { title: "Gone Girl", author: "Gillian Flynn", theme: "Thriller" },
  { title: "The Couple Next Door", author: "Shari Lapena", theme: "Thriller" },
  { title: "The Woman in the Window", author: "A.J. Finn", theme: "Thriller" },
];

const FreePlan = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleSearch = (event) => setSearchQuery(event.target.value);
  const handleGenreChange = (event) => setSelectedGenre(event.target.value);

  const filteredBooks = books.filter(book => {
    const matchSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchGenre = selectedGenre === 'All' || book.theme === selectedGenre;
    return matchSearch && matchGenre;
  });

  return (
    <div style={{ backgroundColor: '#e6f4ea', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', color: '#fff' }}>
        <div
          style={{
            backgroundImage: 'url("images4.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '350px',
            position: 'relative',
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          ></div>

          {/* Hero content */}
          <Container
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <h1 className="mb-3">📚 Book Gallery</h1>
            <p className="mb-4">Explore classics, thrillers, and timeless stories</p>

            {/* Search & Filter */}
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: '10px' }}>
              <InputGroup style={{ maxWidth: '300px' }}>
                <FormControl
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '10px 15px',
                  }}
                />
              </InputGroup>
              <Form.Select
                value={selectedGenre}
                onChange={handleGenreChange}
                style={{
                  maxWidth: '200px',
                  borderRadius: '20px',
                  padding: '10px 15px',
                }}
              >
                <option value="All">All Genres</option>
                {[...new Set(books.map(b => b.theme))].map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </Form.Select>
            </div>
          </Container>
        </div>
      </section>

      {/* Book Cards */}
      <Container className="py-5">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredBooks.map((book, idx) => (
            <Col key={idx}>
              <div
                style={{
                  display: 'flex',
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                {/* Left green side */}
                <div style={{ width: '8px', backgroundColor: '#064635' }}></div>

                {/* Content */}
                <Card className="w-100 border-0">
                  <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>📖</div>
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                    <Card.Text className="mt-auto">
                      <span className="badge bg-success">{book.theme}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* Right green side */}
                <div style={{ width: '8px', backgroundColor: '#064635' }}></div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredBooks.length === 0 && (
          <div className="text-center mt-5 text-muted">
            <p>No books found matching your criteria.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FreePlan;
