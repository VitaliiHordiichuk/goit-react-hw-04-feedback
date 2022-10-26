import css from '../Statistics/Statistics.module.css'
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutrel, bad, total, positivePercentage }) => (
  <>
        <p className={css.statistic}>Statistics</p>
        { good|| neutrel || bad ? <ul>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutrel: <span>{neutrel}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        total: <span>{total()}</span>
      </li>
      <li>
                Positive feedback: <span>{positivePercentage()}</span>
      </li>
    </ul> : <Notification message="There is no feedback"/>}
   </>
);

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutrel: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}

export default Statistics;
