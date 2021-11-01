const Footer = (props) => {
  return (
    <footer>
      <p>
        Made with <strong>{props.tech}</strong> at <strong>{props.school}</strong> By <strong>{props.author}</strong>
      </p>
    </footer>
  );
};

export default Footer;
