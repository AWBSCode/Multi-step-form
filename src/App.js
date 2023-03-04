// React libs
import React, { useState } from 'react';

// global
import Progress from './components/progress/Progress';

// steps
import Step1 from './components/steps/step1/Step1';
import Step2 from './components/steps/step2/Step2';

// css
import './scss/Main.css'

function App() {
  // step index
  const [step, setStep] = useState(0)

  // steps 
  const steps = [
    <Step1 goForward={goForward} submitIt={submitIt} />,
    <Step2 goForward={goForward} submitIt={submitIt} />,
  ]

  // is submit varible
  const [isSub, setSub] = useState(false)

  // step up function [go forward]
  function goForward(e) {
  }

  React.useEffect(() => {
    if (isSub) {
       setStep(prev => prev+1)
    }
  }, [isSub])

  // submit the form
  function submitIt(e) {
    e.preventDefault()
    setSub(true)
  }

  return (
    <div className="App">
      <div className='main'>
        <Progress />

        {steps[step]}
      </div>
    </div>
  );
}

export default App;
