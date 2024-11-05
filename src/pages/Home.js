import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <div className="carousel">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="carousel-card">
            <img src={`src/img/image+${index + 1}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
