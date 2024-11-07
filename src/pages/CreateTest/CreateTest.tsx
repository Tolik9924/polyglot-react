import React, { useState } from 'react';

import { Button, Checkbox, Input } from 'antd';
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import styles from './CreateTest.module.css';

type Answer = {
  id: number;
  name: string;
  isCorrect: boolean;
}

type Question = {
  id: number;
  answers: Array<Answer>
}

type Sentence = {
  id: number;
  english: string;
  ukrainian: string;
  questions?: Array<Question>;
}

type Test = {
  topic: string,
  sentences: Array<Sentence>
}

const CreateTest = () => {
  const [test, setTest] = useState<Test>({
    topic: "",
    sentences: [
      {
        id: 1,
        english: "",
        ukrainian: "",
        answers: []
      } as Sentence
    ],
  });

  const { control, handleSubmit, formState: { errors } } = useForm<Test>({
    defaultValues: {
      topic: "",
      sentences: [
        {
          id: 1,
          english: "",
          ukrainian: "",
          answers: []
        } as Sentence
      ],
    }
  });

  const onSubmit: SubmitHandler<Test> = (data) => {
    console.log("Data: ", data)
  }

  const [topic, setTopic] = useState<string>("");
  const [sentences, setSentences] = useState([
    {
      id: 1,
      english: "",
      ukrainian: ""
    }
  ]);

  const [questions, setQuestions] = useState([{
    id: 1,
    answers: [{
      id: 1,
      name: "",
      isCorrect: false
    }]
  }]);

  const changeTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const changeEnglish = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    setSentences([...sentences.map((item) => {
      if (id === item.id) {
        return { ...item, english: event.target.value };
      } else {
        return { ...item };
      }
    })]);
  };

  const changeUrkainian = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    setSentences([...sentences.map((item) => {
      if (id === item.id) {
        return { ...item, ukrainian: event.target.value };
      } else {
        return { ...item };
      }
    })]);
  };

  const changeAnswer = (idQuestion, idAnswer, event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestions([...questions.map((question) => {
      if (question.id === idQuestion) {
        return {
          ...question,
          answers: [
            ...question.answers.map((answer) => {
              if (answer.id === idAnswer) {
                return {
                  ...answer,
                  name: event.target.value
                } as Answer;
              } else {
                return { ...answer } as Answer;
              }
            })
          ]
        } as Question
      } else {
        return { ...question } as Question
      }
    })]);
  };

  const changeIsTrueAnswer = (idQuestion, idAnswer) => {
    setQuestions([...questions.map((question) => {
      if (question.id === idQuestion) {
        return {
          ...question,
          answers: [
            ...question.answers.map((answer) => {
              if (answer.id === idAnswer) {
                return {
                  ...answer,
                  isCorrect: !answer.isCorrect
                } as Answer;
              } else {
                return { ...answer } as Answer;
              }
            })
          ]
        } as Question
      } else {
        return { ...question } as Question
      }
    })]);
  };

  const addSentence = () => {
    setSentences([...sentences, {
      id: sentences.length + 1,
      english: "",
      ukrainian: ""
    }]);
    setQuestions([...questions, {
      id: questions.length + 1,
      answers: [{
        id: 1,
        name: "",
        isCorrect: false
      }]
    }]);
  };

  const addAnswer = (idQuestion) => {
    setQuestions([...questions.map((question) => {
      if (question.id === idQuestion) {
        return {
          ...question,
          answers: [...question.answers, {
            id: question.answers.length + 1,
            name: "",
            isCorrect: false
          }]
        }
      } else {
        return { ...question };
      }
    })]);
  };

  const saveTest = () => {    
    setTest( {
      ...test,
      topic: topic,
      sentences: [...sentences.map((sentence) => {
        return {
          ...sentence,
          questions: questions.find((question) => question.id === sentence.id)
        } as Sentence})]
    });
  };

  console.log("TEST: ", test);

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(saveTest)}>
          <div className={styles.formItem}>
            <p className={styles.nameOfItem}>Topic:</p>
            <div className={styles.inputContainer}>
              <Input value={topic} onChange={changeTopic} size="large" />
            </div>
          </div>
          {sentences.map((item) => (
            <div key={item.id}>
              <div className={styles.formItem}>
                <p className={styles.nameOfItem}>Ukrainian:</p>
                <div className={styles.inputContainer}>
                  <Input
                    value={item.ukrainian}
                    onChange={(event) => changeUrkainian(item.id, event)}
                    size="large"
                  />
                </div>
              </div>
              <div key={item.id} className={styles.formItem}>
                <p className={styles.nameOfItem}>English:</p>
                <div className={styles.inputContainer}>
                  <Input
                    value={item.english}
                    onChange={(event) => changeEnglish(item.id, event)}
                    size="large"
                  />
                </div>
              </div>
              {questions.map((question) => {
                if (question.id === item.id) {
                  return (
                    question.answers.map((item) => (
                      <div key={item.id}>
                        <div className={styles.test}>
                          <p className={styles.nameOfTest}>Answer: </p>
                          <div className={styles.inputAnswerContainer}>
                            <Input
                              value={item.name}
                              onChange={(event) => changeAnswer(question.id, item.id, event)}
                              size="middle"
                            />
                          </div>
                          <Checkbox
                            checked={item.isCorrect}
                            onChange={() => changeIsTrueAnswer(question.id, item.id)}
                          />
                        </div>
                        {
                          item.id === question.answers.length
                          && <div className={styles.addAnswer}>
                            <Button
                              size='small'
                              type='primary'
                              onClick={() => addAnswer(question.id)}
                            >
                              Add Answer
                            </Button>
                          </div>
                        }
                      </div>
                    ))
                  );
                } else {
                  return <p key={question.id}></p>;
                }
              })}
            </div>
          ))}
          <div className={styles.addContainer}>
            <Button
              onClick={addSentence}
              size='middle'
              type='primary'
            >
              Add Sentence
            </Button>
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