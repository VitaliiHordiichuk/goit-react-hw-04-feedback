import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutrel, setNeutrel] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutrel + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiv = Math.round(100 / ((good + neutrel + bad) / good)) + '%';
    return positiv;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutrel':
        setNeutrel(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutrel', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutrel={neutrel}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </div>
  );
};

export default App;
