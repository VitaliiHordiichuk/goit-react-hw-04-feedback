import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'
import Statistics from '../Statistics/Statistics'

class Feedback extends React.Component {
  state = {
    good: 0,
    neutrel: 0,
    bad: 0,
    total: 0,
    };
    
   totalStatistics = (good, neutral, bad) => {
    return {total: good + neutral + bad};
   };
  
    goodStatistics = () => {
      this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
  };

  neutrelStatistics = () => {
     this.setState(prevState => {
            return {
                neutrel: prevState.neutrel + 1,
            }
        })
  };

  badStatistics = () => {
    this.setState(prevState => {
      
            return {
              bad: prevState.bad + 1,
             
            }
        })
  };

// onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };
  

  render() {
// const {good, neutrel, bad, total} = this.state

    return (
      <div>
<Section title=""/>
        <FeedbackOptions 
          onGoodStatistics={this.goodStatistics}
          onNeutrelStatistics={this.neutrelStatistics}
          onBadStatistics={this.badStatistics}
          // options={['good', 'neutral', 'bad']}
          // onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics good={this.state.good}
          neutrel={this.state.neutrel}
          bad={this.state.bad}
          total={this.state.total} />
      </div>
    );
  }
}
export default Feedback;
