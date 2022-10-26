import React from 'react';
import css from './Notification/Notification.module.css';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'

class App extends React.Component {
  state = {
    good: 0,
    neutrel: 0,
    bad: 0,
  };
  
     
  
  countTotalFeedback = () => {
    return (this.state.good + this.state.neutrel + this.state.bad)
  };

  countPositiveFeedbackPercentage = () => {
 
    const positiv = Math.round(100 / ((this.state.good + this.state.neutrel + this.state.bad) / this.state.good)) + '%';
    return positiv;
  }
 
  
  onLeaveFeedback = (event) => {
    const { name } = event.target;
    this.setState(prevState => {
        return {
          [name]: prevState[name] + 1,
      }
    })
  };

  render() {

    return (
      <div>
<Section title=""/>
        <FeedbackOptions 
          title="Please leave feedback"
          options={['good', 'neutrel', 'bad']}
          onLeaveFeedback={(e) => this.onLeaveFeedback(e)}
          
        
        
        />
        <Statistics good={this.state.good}
          neutrel={this.state.neutrel}
          bad={this.state.bad}
          total={this.countTotalFeedback} 
          positivePercentage={this.countPositiveFeedbackPercentage}/>
      </div>
    );
  }
}
export default App;
