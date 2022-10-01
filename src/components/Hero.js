import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaSearch,
} from "react-icons/fa";
import SmallSearchContainer from "./SmallSearchContainer";

const Hero = () => {
  return (
    <section className="container hero_section_container">
      <h1>FAKE PRODUCT STORE</h1>
      {/* <SmallSearchContainer placeholder="search recipe"/> */}
      <br />

      <ul className="hero_social_icons">
        <li>
          <a
            href="https://www.facebook.com/paul.ochagwuprosperous"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram/realityochagwu"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter/Ochagwupaul"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.github/Web-pilot"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
