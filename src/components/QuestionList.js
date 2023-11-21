import React from "react";
import { useState, useEffect } from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {

  const [questionList, setQuestionList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((quests) => setQuestionList(quests))

  }, [])

 

  return (
    <section>

      <QuestionForm />
      
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */

            
           questionList.map((quest) => {
            <QuestionItem
            key={quest.id}
            question={quest}
            />

           })}
      </ul>
    </section>
  );
}

export default QuestionList;
