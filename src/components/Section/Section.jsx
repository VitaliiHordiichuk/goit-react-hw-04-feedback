import PropTypes from 'prop-types';
import css from '../Section/Section.mobule.css'

const Section = ({ title, children }) => (
    <section>
        <h2 className={css.title}>{title}</h2>
      {children}
    </section>);

Section.protoType = {
  title: PropTypes.string.isRequired,
}

export default Section;