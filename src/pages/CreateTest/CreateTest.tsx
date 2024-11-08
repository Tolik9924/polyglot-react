import React, { useState } from 'react';

import { Button, Checkbox, Input } from 'antd';
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import styles from './CreateTest.module.css';

interface SubQuestion {
  id: number;
  name: "";
  isCorrect: boolean;
}

interface Question {
  id: number;
  name: string;
  subQuestions: Array<SubQuestion>
}

interface Test {
  sentence: "";
  correctAnswer: "";
  questions: Array<Question>
}

const CreateTest = () => {
  const [test, setTest] = useState({
    sentence: "",
    correctAnswer: "",
    questions: [
      {
        id: 1,
        name: "1 Question",
        subQuestions: [
          { id: 1, name: "", isCorrect: false }
        ]
      }
    ]
  });

  const { control, handleSubmit, formState: { errors } } = useForm<Test>({
    defaultValues: {
      sentence: "",
    correctAnswer: "",
    questions: [
      {
        id: 1,
        name: "1 Question",
        subQuestions: [
          { id: 1, name: "", isCorrect: false }
        ]
      }
    ]
    }
  });

  const [sentence, setSentence] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: "1 Question",
      subQuestions: [
        { id: 1, name: "", isCorrect: false }
      ]
    }
  ]);

  const changeSentence = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  const changeCorrectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectAnswer(event.target.value);
  };

  const handleChangeSubQuestionName = (
    idQuestion: number,
    idSubQuestion: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestions([...questions.map((question) => {
      if (question.id === idQuestion) {
        return {
          ...question,
          subQuestions: question.subQuestions.map((subQuestion) => {
            if (subQuestion.id === idSubQuestion) {
              return {
                ...subQuestion,
                name: event.target.value
              };
            } else {
              return { ...subQuestion };
            }
          })
        }
      } else {
        return { ...question }
      }
    })]);
  };

  const handleChangeIsCorrect = (idQuestion: number, idSubQuestion: number,) => {
    setQuestions([...questions.map((question) => {
      if (question.id === idQuestion) {
        return {
          ...question,
          subQuestions: question.subQuestions.map((subQuestion) => {
            if (subQuestion.id === idSubQuestion) {
              return {
                ...subQuestion,
                isCorrect: !subQuestion.isCorrect
              };
            } else {
              return { ...subQuestion };
            }
          })
        }
      } else {
        return { ...question }
      }
    })]);
  };

  const addSubQuestion = (idQuestion: number) => {
    setQuestions([
      ...questions.map((question) => {
        if (question.id === idQuestion) {
          return {
            ...question,
            subQuestions: [
              ...question.subQuestions,
              {
                id: question.subQuestions.length + 1,
                name: "",
                isCorrect: false
              }
            ]
          };
        } else {
          return { ...question };
        }
      }),
    ]);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        name: `${questions.length + 1} Question`,
        subQuestions: [
          {
            id: 1,
            name: "",
            isCorrect: false
          }
        ]
      }
    ]);
  };

  const saveTest = () => {
    setTest({
      ...test,
      sentence: sentence,
      correctAnswer: correctAnswer,
      questions: [...questions]
    });
  };

  console.log("TEST: ", test);

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(saveTest)}>
          <div className={styles.formItem}>
            <p className={styles.nameOfItem}>Sentence:</p>
            <div className={styles.inputContainer}>
              <Input value={sentence} onChange={changeSentence} size="large" />
            </div>
          </div>
          <div className={styles.formItem}>
            <p className={styles.nameOfItem}>Correct Answer:</p>
            <div className={styles.inputContainer}>
              <Input value={correctAnswer} onChange={changeCorrectAnswer} size="large" />
            </div>
          </div>
          <div>
            {questions.map((question) => (
              <div key={question.id} className={styles.questionContainer}>
                <p className={styles.nameOfItem}>{question.name}</p>
                {question.subQuestions.map((subQuestion) => (
                  <div key={subQuestion.id}>
                    <div className={styles.test}>
                      <p className={styles.nameOfTest}>Name:</p>
                      <div className={styles.inputContainer}>
                        <Input
                          value={subQuestion.name}
                          onChange={(event) => handleChangeSubQuestionName(question.id, subQuestion.id, event)}
                        />
                      </div>
                      <div className={styles.checkboxContainer}>
                        <Checkbox
                          checked={subQuestion.isCorrect}
                          onChange={() => handleChangeIsCorrect(question.id, subQuestion.id)}
                        />
                      </div>
                    </div>
                    {subQuestion.id === question.subQuestions.length
                      && <Button
                        type="primary"
                        size="middle"
                        onClick={() => addSubQuestion(question.id)}
                      >
                        Add SubQuestion
                      </Button>}
                  </div>
                ))}
              </div>
            ))}
            <div className={styles.addQuestion}>
              <Button
                type="primary"
                size="middle"
                onClick={addQuestion}
              >
                Add Question
              </Button>
            </div>
          </div>
          <div className={styles.saveTest}>
            <Button
              size="large"
              type='primary'
              block
              htmlType='submit'
            >
              Save Test
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTest;