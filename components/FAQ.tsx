import React, { useState } from 'react';

import './faq.scss';

export type Tq_a = {
  question: string;
  answer: React.ReactNode;
}

export type TProps = {
  title: string;
  q_as: Array<Tq_a>
}

const QACard = ({ question, answer, open }: Tq_a & { open: boolean }) => (
  <div className="qa-card-wrapper">
    <div className="question-wrapper">
      <span>
        {question}
      </span>
      <span>
        +
      </span>
    </div>
    {
      open &&
      <div className="answer-wrapper">
        {answer}
      </div>
    }
  </div>
)

const FAQ = ({ title, q_as }: TProps) => {
  const [openedIndex, setopenedIndex] = useState(Infinity)
  const [viewMore, setViewMore] = useState(false)
  return (
    <div className="faq-wrapper">
      <h2>{title}</h2>
      {
        q_as.map((item, index) => {
          if (!viewMore && index > 3) {
            return null;
          } else {
            return (
              <div onClick={() => { if (index === openedIndex) { setopenedIndex(Infinity) } else { setopenedIndex(index) } }} key={index.toString()}>
                <QACard question={item.question} answer={item.answer} open={index === openedIndex} />
              </div>
            );
          }
        })
      }
      <button className="view-more-btn" onClick={() => setViewMore(!viewMore)}>
        {!viewMore && 'View More'}
        {viewMore && 'View Less'}
      </button>
    </div>
  )
}

export default FAQ