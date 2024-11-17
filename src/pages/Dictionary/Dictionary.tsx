import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Button } from 'core_ui_design_system';

import styles from './Dictionary.module.css';

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
  /* const [word, setWord] = useState(''); */
  const [answers, setAnswers] = useState([]);

  // From Lesson Page
  const [answer, setAnswer] = useState("");
  const [isNotCorrect, setIsNotCorrect] = useState(false);
  const [testWordId, setTestWordId] = useState<number>(0);
  const [testId, setTestId] = useState(1);

  const [test, setTest] = useState(startTest);
  const [sentence, setSentence] = useState({ ...startTest[0] });
  const [testWord, setTestWord] = useState();
  const [randomVariants, setRandomVariants] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(sentence.correctAnswer.split(" "));

  const fetchDefinition = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(url);
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
    const result = data[0].definition
      .split(" ")
      .filter(((word) => !word.includes("(") && !word.includes(")")));
    setAnswers(result);
  };

  const swapQuestion = () => {
    console.log("SWAP");
  };

  const onClick = (word: string) => {
    console.log("WORD: ", word);
  };

  console.log("ANSWERS: ", answers);


  useEffect(() => {
    fetchDefinition(correctAnswers[0]);
  }, []);

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
          {isNotCorrect
            ? <div className={styles.uncorrectAnswerContainer}>
              <p className={styles.uncorrectAnswer}>{answer}</p>
              <p className={styles.answer}>{sentence.correctAnswer}</p>
            </div>
            : <div className={styles.correctAnswerContainer}>
              <p className={styles.answer}>{answer}</p>
            </div>
          }
        </div>
      </div>
      <div className={styles.words}>
        {
          answers.map((answer) => {

              return (
                <div key={answer} className={styles.word}>
                  <Button
                    size="l"
                    variant={`${variants[Math.floor(Math.random() * variants.length)] as VariantType}`}
                    onclick={() => {
                      onClick(answer);
                    }}>
                    {answer}
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