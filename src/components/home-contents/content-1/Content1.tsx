import {
  divContentElementStyles,
  paragraphContentStyles,
  titleContentElementStyles,
} from "../styles";

const Content1 = () => {
  return (
    <div className={divContentElementStyles}>
      <h2 className={titleContentElementStyles}>Targeting investors</h2>
      <p className={paragraphContentStyles}>
        The expert staff of Liaison Professionals, Inc. possesses a broad range
        of experience. From aiding presidents, as well as federal, state and
        local officials, to overseeing parliamentary procedures and treaties and
        assisting clients in the private sector, our team provides clients with
        a wealth of experience, personal perspective and the ability to assemble
        effective public-private partnerships.
      </p>
    </div>
  );
};

export default Content1;
