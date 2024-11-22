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
    correctAnswer: "I understand.",
  }
];

const Dictionary = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [chooseAnswer, setChooseAnswer] = useState<string>("");

  // From Lesson Page
  const [isCorrect, setIsCorrect] = useState(false);

  const [test, setTest] = useState<Test[]>([]);
  const [sentence, setSentence] = useState({ ...startTest[0] });
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(sentence.correctAnswer.split(" "));
  const [answer, setAnswer] = useState(correctAnswers[0]);

  const [testId, setTestId] = useState<number>(1);
  const [wordId, setWordId] = useState(0);

  const fetchDefinition = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(url);
      console.log("RESPONSE DATA: ", response.data);
      if (response.data[0].meanings[0].synonyms.length !== 0) {
        setAnswers(response.data[0].meanings[0].synonyms);
      } else if (response.data[0].meanings[0].antonyms.length !== 0) {
        setAnswers(response.data[0].meanings[0].antonyms);
      } else {
        takeAnswersFromDefinition(response.data[0].meanings[0].definitions);
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
    }
  };

  const takeAnswersFromDefinition = (data) => {
    const result: Answer[] = data[0].definition
      .split(" ")
      .filter(((word) => !word.includes("(") && !word.includes(")")))
      .map((item, index) => ({ id: index + 1, name: item, isCorrect: false }));
    // DELETE DUBLICATE OBJECT
    setAnswers(shuffle([...result, { id: result.length + 1, name: correctAnswers[0], isCorrect: true }]));
  };

  const shuffle = (array: Answer[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const swapQuestion = () => {
    console.log("SWAP");
  };

  const onClick = (answer: Answer) => {
    console.log("WORD: ", answer);
    if (answer.isCorrect) {
      console.log("ANSWER IS CORRECT");
    } else {
      console.log("ANSWER IS NOT CORRECT");
    }
    setChooseAnswer(chooseAnswer + ` ${answer.name}`);
    const word = wordId + 1;
    setWordId(word + 1);
    setAnswer(correctAnswers[word]);
    fetchDefinition(correctAnswers[word]);
  };

  console.log("ANSWERS: ", answers);
  console.log("Correct Answers: ", correctAnswers);
  console.log("ANSWER: ", answer);

  useEffect(() => {
    fetchDefinition(answer);
    const allQuestions = startTest.map((item) => ({ ...item, isCompleted: false }));
    setTest([...allQuestions]);
  }, []);

  console.log("TEST: ", test);

  return (
    <div className={styles.lessonPage}>
      <div className={styles.prevQuestion}>
        <Button
          variant="primary"
          size="l"
          onclick={() => swapQuestion()}
        >
          <LeftOutlined />
        </Button>
      </div>
      <div className={styles.nextQuestion}>
        <Button
          variant="primary"
          size="l"
          onclick={() => swapQuestion()}
        >
          <RightOutlined />
        </Button>
      </div>
      <h1 className={styles.topic}>Lesson Topic</h1>
      <div className={styles.sentenceContainer}>
        <p className={styles.sentence}>{sentence.sentence}</p>
        <div className={styles.answerContainer}>
          {isCorrect
            ? <div className={styles.uncorrectAnswerContainer}>
              <p className={styles.uncorrectAnswer}>{answer}</p>
              <p className={styles.answer}>{sentence.correctAnswer}</p>
            </div>
            : <div className={styles.correctAnswerContainer}>
              <p className={styles.answer}>{chooseAnswer}</p>
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
    </div>
  );
};

export default Dictionary;