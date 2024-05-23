import { useContext } from "react"
import { QuizContext } from "../content/quiz"

import './Option.css'

const Option = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option
