import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Button } from 'core_ui_design_system';

import styles from './Dictionary.module.css';

interface Test {
  id: number;
  sentence: string;
  correctAnswer: string;
  isCompleted: boolean;
}

interface Answer {
  id: number;
  name: string;
  isCorrect: boolean;
}

export const Variant = {
  'primary': 'primary',
  'secondary': 'secondary',
  'success': 'success',
  'error': 'error'
};

export type VariantType = keyof typeof Variant;

const variants: string[] = ["primary", "secondary", "success", "error"];

const startTest = [
  {
    id: 1,
    sentence: "Ти покажеш?",
    correctAnswer: "Will you show?",
  },
  {
    id: 2,
    sentence: "Вона почала?",
    correctAnswer: "Did she start?",
  },
  {
    id: 3,
    sentence: "Я розумію.",
    correctAnswer: "I understand",
  }
];

const Dictionary = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [chooseAnswer, setChooseAnswer] = useState<string>("");

  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(0);

  const [test, setTest] = useState<Test[]>([]);
  const [sentence, setSentence] = useState({ ...startTest[0] });
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(sentence.correctAnswer.split(" "));
  const [answer, setAnswer] = useState(correctAnswers[0]);

  const [testId, setTestId] = useState<number>(1);
  const [wordId, setWordId] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  console.log("ANSWERS: ", answers);
  console.log("CORRECT ANSWER: ", correctAnswers);
  console.log("ANSWERD QUESTIONS: ", answeredQuestions);
  console.log("IS CORRECT: ", isCorrect);
  console.log("IS CORRECT ANSWER: ", isCorrectAnswer);


  const fetchDefinition = async (word: string) => {
    console.log("WORD IN FETCH DEFINITION: ", word);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(url);
      console.log("RESPONSE DATA: ", response.data);
      if (response.data[0].meanings[0].synonyms.length !== 0) {
        await takeAnswersFromDefinition(response.data[0].meanings[0].synonyms, word, 'synonyms');
      } else if (response.data[0].meanings[0].antonyms.length !== 0) {
        setAnswers(response.data[0].meanings[0].antonyms);
        await takeAnswersFromDefinition(response.data[0].meanings[0].antonyms, word, 'antonyms');
      } else {
        await takeAnswersFromDefinition(response.data[0].meanings[0].definitions, word, 'definitions');
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
    }
  };

  const takeAnswersFromDefinition = (data, correctAnswer: string, type: string) => {
    if (type === 'definitions') {
      const result: Answer[] = data[0].definition
        .split(" ")
        .filter(((word) => !word.includes("(") && !word.includes(")")))
        .filter((word, i, self) => i === self.indexOf(word) && word !== correctAnswer)
        .map((item, index) => ({ id: index + 1, name: item, isCorrect: false }));

      setAnswers(shuffle([...result, { id: result.length + 1, name: correctAnswer, isCorrect: true }]));
    }

    if (type === 'synonyms' || type === 'antonyms') {
      const result = data
        .map((item, index) => ({ id: index + 1, name: item, isCorrect: false }));

      setAnswers(shuffle([...result, { id: result.length + 1, name: correctAnswer, isCorrect: true }]));
    }
  };

  const shuffle = (array: Answer[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const onClick = (answer: Answer) => {
    const answered = answeredQuestions + 1;
    let correct = 0;
    setAnsweredQuestions(answered);

    if (answer.isCorrect) {
      correct = isCorrectAnswer + 1;
      setIsCorrectAnswer(correct);
    }

    if (answered !== correctAnswers.length) {
      const word = wordId + 1;
      setWordId(word);
      setAnswer(correctAnswers[word]);
      fetchDefinition(correctAnswers[word]);
    }

    if (answered === correctAnswers.length) {
      setAnswers([]);
      if (correct === correctAnswers.length) {
        setIsCorrect(true);
      }

      if (correct !== correctAnswers.length) {
        setIsCorrect(false);
      }
    }

    setChooseAnswer(chooseAnswer + ` ${answer.name}`);
  };

  const swapQuestion = (id: number) => {
    let questionId: number = 0;
    if (id <= test.length) {
      questionId = id;
      setTestId(id);
      showSentence(id);
    }

    if (id > test.length) {
      questionId = 1;
      setTestId(questionId);
      showSentence(questionId);
    }

    if (id < 1) {
      questionId = test.length;
      setTestId(questionId);
      showSentence(questionId);
    }
  };

  const showSentence = (id: number) => {
    setChooseAnswer("");
    for (let i = 0; i < startTest.length; i++) {
      if (startTest[i].id === id) {
        setSentence({ ...startTest[i] });
        setCorrectAnswers(startTest[i].correctAnswer.split(" "));
        setAnswer(startTest[i].correctAnswer.split(" ")[0]);
        fetchDefinition(startTest[i].correctAnswer.split(" ")[0]);
        setWordId(0);
        setAnsweredQuestions(0);
        setIsCorrect(false);
        setIsCorrectAnswer(0);
      }
    }
  };

  useEffect(() => {
    fetchDefinition(answer);
    const allQuestions = startTest.map((item) => ({ ...item, isCompleted: false }));
    setTest([...allQuestions]);
  }, []);

  useEffect(() => {
    showSentence(testId);
  }, [testId]);

  return (
    <div className={styles.lessonPage}>
      <div className={styles.prevQuestion}>
        <Button
          variant="primary"
          size="l"
          onclick={() => swapQuestion(testId - 1)}
        >
          <LeftOutlined />
        </Button>
      </div>
      <div className={styles.nextQuestion}>
        <Button
          variant="primary"
          size="l"
          onclick={() => swapQuestion(testId + 1)}
        >
          <RightOutlined />
        </Button>
      </div>
      <h1 className={styles.topic}>Lesson Topic</h1>
      <div className={styles.sentenceContainer}>
        <p className={styles.sentence}>{sentence.sentence}</p>
        <div className={styles.answerContainer}>
          {answeredQuestions !== correctAnswers.length &&
            <div className={styles.correctAnswerContainer}>
              <p className={styles.answer}>{chooseAnswer}</p>
            </div>
          }
          {isCorrect && answeredQuestions === correctAnswers.length &&
            <div className={styles.correctAnswerContainer}>
              <p className={styles.answer}>{sentence.correctAnswer}</p>
              <p className={styles.answer}>You Complete Test.</p>
            </div>
          }
          {!isCorrect && answeredQuestions === correctAnswers.length &&
            <div className={styles.uncorrectAnswerContainer}>
              <p className={styles.uncorrectAnswer}>{chooseAnswer}</p>
              <p className={styles.answer}>{sentence.correctAnswer}</p>
              <p className={styles.uncorrectAnswer}>Wrong Answer!</p>
            </div>
          }
        </div>
      </div>
      <div className={styles.words}>
        {
          answers.map((answer) => {

            return (
              <div key={answer.id} className={styles.word}>
                <Button
                  size="l"
                  variant={`${variants[Math.floor(Math.random() * variants.length)] as VariantType}`}
                  onclick={() => {
                    onClick(answer);
                  }}>
                  {answer.name}
                </Button>
              </div>
            );
          })
        }
      </div>
      <div className={styles.pagination}>
        {test.map((item) => (
          <Button
            key={item.id}
            size="s"
            variant={item.isCompleted ? "success" : "primary"}
            onclick={() => {
              setTestId(item.id)
            }}>
            {item.id}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;