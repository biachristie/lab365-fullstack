import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Questions.css'

function Questions() {
    const questions = [
        {
            id: 0,
            question: 'Lorem ipsum?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
        },
        {
            id: 1,
            question: 'Lorem ipsum?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
        },
        {
            id: 2,
            question: 'Lorem ipsum?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
        },
        {
            id: 3,
            question: 'Lorem ipsum?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
        },
        
    ]

    const renderQuestionCard = (question) => {
        return (
            <Fragment key={ question.id }>
                <div className="question">
                    <details>
                        <summary className="question-title">
                            <p>{ question.question }</p>
                        </summary>
                        <div className="question-answer">
                            <p>{ question.answer }</p>
                        </div>
                    </details>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="questions-container">
            { questions.map(renderQuestionCard) }
        </div>
    );
}

Questions.propTypes = {
    questions: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
}

export default Questions;