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
        <div className="title">Explore the anime World – In Tamil</div>
        <div className="description">
          Welcome to a platform dedicated to sharing the world of anime, brought to life through the expressive Tamil language. 
          From action-packed adventures to emotional storylines, each video breaks down anime moments with engaging and easy-to-understand Tamil explanations. 
          Whether you're a longtime fan or just getting started, this website is your gateway to exploring anime in a way that's relatable, fun, and deeply connected to Tamil culture.
          Dive into your favorite shows — now in your own language!
        </div>
      </div>
    </section>
  );
}

export default About;
