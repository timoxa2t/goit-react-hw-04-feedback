import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import React, {useState} from "react";

const feedbackOptions = {
  GOOD: "good",
  NEUTERAL: "neutral",
  BAD: "bad"
}

export const App = () => {


  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const handleFeedback = evt => {
      const key = evt.target.innerText
      setState(state => {
        const newState = {...state}
        newState[key] = newState[key] + 1
        return newState
      }) 
  }

  const total = countTotalFeedback(state.good, state.neutral, state.bad)

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleFeedback}/>
      </Section>

      <Section title="Statistics">
        {total && total > 0 ? 
          <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={total} positivePercentage={countPositiveFeedbackPercentage(state.good, state.neutral, state.bad)}></Statistics>
          : <Notification message="There is no feedback"/>
        }
      </Section>
    </div>
  );
};



const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad
}

const countPositiveFeedbackPercentage = (good, neutral, bad) => {
  if(good === 0) return 0
  return parseInt(good / countTotalFeedback(good, neutral, bad) * 100) 
}
