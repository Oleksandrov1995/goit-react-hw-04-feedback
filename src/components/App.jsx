import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  
    const handleLeaveFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;
        default:
          return;
      }
    };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const total = countTotalFeedback();
  
  const positivePercentage = countPositiveFeedbackPercentage();

 

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions
        options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ): (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
