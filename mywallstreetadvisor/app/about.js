// pages/about.js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
};

export default About;
