import shortid from 'shortid';
import Section from '../Section/Section';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes, { arrayOf } from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section>
    <ul className={css.feedBack}>
      {options.map(option => (
        <li key={shortid.generate()}>
          <button
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  </Section>
);

FeedbackOptions.protoType = {
  options: arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
