import shortid from 'shortid';
import Section from '../Section/Section'
import css from '../FeedbackOptions/FeedbackOptions.module.css'
import PropTypes, { arrayOf } from 'prop-types';


const FeedbackOptions = ({ title, options, onLeaveFeedback }) => (
 <Section title={title}>
    <ul className={css.feedBack}>
      {options.map(option => (
        <li key= {shortid.generate()}>
          <button type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
      ))}
    </ul>
</Section>
);

FeedbackOptions.protoType = {
  title: PropTypes.string.isRequired,
  options: arrayOf(
    PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;