import {
  divContentElementStyles,
  paragraphContentStyles,
  titleContentElementStyles,
} from "../styles";

const Content2 = () => {
  return (
    <div className={divContentElementStyles}>
      <h2 className={titleContentElementStyles}>Targeting customers</h2>
      <p className={paragraphContentStyles}>
        Mediterranean Dream provides you with scrumptious family recipes from
        yia-yia's native Greece, which she's perfected since moving to the
        United States with her husband and three children in 1975. With a love
        for cooking and her eldest son's passion for wine, together, the family
        opened their first restaurant in 1989 in Orange County as a small
        eight-table eatery. Over the years, with much critical acclaim, our
        philosophy has remained true to its roots by serving the finest
        Mediterranean cuisine with the freshest ingredients.
      </p>
    </div>
  );
};

export default Content2;
