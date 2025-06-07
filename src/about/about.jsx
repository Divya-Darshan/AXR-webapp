import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="overlay">
        <img
          src="https://yt3.googleusercontent.com/l9exL-QVcEMHpStnE5TJe2YDQNKFVl8k1zW-1KUZKCdjdz87TR6Gvlx3g0Wiey7FiegAdoiY=s160-c-k-c0x00ffffff-no-rj"
          alt="YouTube Channel Profile"
          className="profile-img"
        />
        <div className="title">Explore the Animal World – In Tamil</div>
        <div className="description">
          Welcome to a platform dedicated to spreading fascinating knowledge about animals,
          presented in the rich and expressive Tamil language. From the mysterious creatures of the wild
          to the animals around us, each video delivers engaging, educational content that sparks curiosity.
          This website is your gateway to explore nature's wonders through simplified, easy-to-understand Tamil explanations.
          Dive in and discover the beauty of the animal kingdom like never before!
        </div>
      </div>
    </section>
  );
}

export default About;
