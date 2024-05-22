import { useContext } from "react"
import { QuizContext } from "../content/quiz"

import './Option.css'

const Option = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="option">
      <p>{option}</p>
    </div>
  )
}

export default Option
