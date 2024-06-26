import { useContext } from "react"
import { QuizContext } from "../content/quiz"

import './Option.css'

const Option = ({option, selectOption, answer}) => {
    const [quizState] = useContext(QuizContext)

  return (
    <div className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      } ${
        quizState.answerSelected && option !== answer ? 'wrong' : ''
      }`} 
      onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option
