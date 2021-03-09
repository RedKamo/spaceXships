import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        © 2021 This site is made by <span>Red</span>Kamo👨🏾‍🚀.
      </h3>
      <div className="footer__social">
        <a href="https://github.com/RedKamo" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://twitter.com/RedKamo_" target="_blank">
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Footer;
