import React from 'react';

import { Button } from 'core_ui_design_system';
import { useEffect, useState } from 'react';
import styles from './Lesson.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


interface SubQuestion {
  id: number;
  name: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  name: string;
  subQuestions: Array<SubQuestion>;
}

interface Sentence {
  id: number;
  sentence: string;
  correctAnswer: string;
  isCompleted: boolean;
  questions: Array<Question>;
};

export const Variant = {
  'primary': 'primary',
  'secondary': 'secondary',
  'success': 'success',
  'error': 'error'
};

export type VariantType = keyof typeof Variant;

const startTest = [
  {
    id: 1,
    sentence: "Ти покажеш?",
    correctAnswer: "Will you show?",
    isCompleted: false,
    questions: [
      {
        id: 1,
        name: "first word",
        subQuestions: [
          { id: 1, name: "Does", isCorrect: false },
          { id: 2, name: "Will", isCorrect: true },
          { id: 3, name: "Did", isCorrect: false },
          { id: 4, name: "Are", isCorrect: false },
        ]
      },
      {
        id: 2,
        name: "second word",
        subQuestions: [
          { id: 1, name: "I", isCorrect: false },
          { id: 2, name: "He", isCorrect: false },
          { id: 3, name: "You", isCorrect: true },
          { id: 4, name: "We", isCorrect: false },
        ]
      },
      {
        id: 3,
        name: "third word",
        subQuestions: [
          { id: 1, name: "Hide?", isCorrect: false },
          { id: 2, name: "Screen?", isCorrect: false },
          { id: 3, name: "Try?", isCorrect: false },
          { id: 4, name: "Show?", isCorrect: true },
        ]
      },
    ],
  },
  {
    id: 2,
    sentence: "Вона почала?",
    correctAnswer: "Did she start?",
    isCompleted: false,
    questions: [
      {
        id: 1,
        name: "first word",
        subQuestions: [
          { id: 1, name: "Does", isCorrect: false },
          { id: 2, name: "Will", isCorrect: false },
          { id: 3, name: "Did", isCorrect: true },
          { id: 4, name: "Are", isCorrect: false },
        ]
      },
      {
        id: 2,
        name: "second word",
        subQuestions: [
          { id: 1, name: "I", isCorrect: false },
          { id: 2, name: "She", isCorrect: true },
          { id: 3, name: "You", isCorrect: false },
          { id: 4, name: "We", isCorrect: false },
        ]
      },
      {
        id: 3,
        name: "third word",
        subQuestions: [
          { id: 1, name: "Start?", isCorrect: true },
          { id: 2, name: "Screen?", isCorrect: false },
          { id: 3, name: "Try?", isCorrect: false },
          { id: 4, name: "Show?", isCorrect: false },
        ]
      },
    ],
  },
  {
    id: 3,
    sentence: "Я розумію.",
    correctAnswer: "I understand.",
    isCompleted: false,
    questions: [
      {
        id: 1,
        name: "first word",
        subQuestions: [
          { id: 1, name: "I", isCorrect: true },
          { id: 2, name: "He", isCorrect: false },
          { id: 3, name: "She", isCorrect: false },
          { id: 4, name: "It", isCorrect: false },
        ]
      },
      {
        id: 2,
        name: "second word",
        subQuestions: [
          { id: 1, name: "start.", isCorrect: false },
          { id: 2, name: "screen.", isCorrect: false },
          { id: 3, name: "understand.", isCorrect: true },
          { id: 4, name: "show.", isCorrect: false },
        ]
      },
    ],
  }
];

const variants: string[] = ["primary", "secondary", "success", "error"];

const Lesson = () => {
  const [answer, setAnswer] = useState("");
  const [isNotCorrect, setIsNotCorrect] = useState(false);
  const [testWordId, setTestWordId] = useState<number>(0);
  const [testId, setTestId] = useState(1);

  const [test, setTest] = useState(startTest);
  const [sentence, setSentence] = useState<Sentence>({ ...startTest[0] });
  const [testWord, setTestWord] = useState({ ...sentence.questions[testWordId] });
  const [randomVariants, setRandomVariants] = useState<string[]>([]);

  const onClick = async (word: string, isCorrect: boolean) => {
    if (isCorrect) {
      let count = 0;
      setAnswer(answer + word + " ");
      if (testWord.id < sentence.questions.length) {
        count = testWordId + 1;
        setTestWordId(testWordId + 1);
        setTestWord(sentence.questions[count]);
      }
      if (sentence.questions.length === testWord.id) {
        setTestWordId(0);
        const newSentence = { ...sentence, isCompleted: true };
        setSentence({ ...sentence, isCompleted: true });
        const updatedTest = test.filter((item) => {
          return item.id !== testId;
        });
        updatedTest.push(newSentence);
        updatedTest.sort((a, b) => {
          return a.id - b.id;
        });
        setTest([...updatedTest]);
      }
    }

    if (!isCorrect) {
      setIsNotCorrect(true);
    }
  }

  const showSentence = (id: number, isCompleted: boolean) => {
    setTestWordId(0);
    setTestId(id);
    const filteredSentence = test.filter((item) => item.id === id);
    setSentence({ ...filteredSentence[0] });
    setTestWord(filteredSentence[0].questions[0]);
    if (isCompleted) {
      setAnswer(filteredSentence[0].correctAnswer);
    } else {
      setAnswer("");
    }
  }

  const shuffle = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const swapQuestion = (id: number) => {
    let questionId: number = 0;
    if (id <= test.length) {
      questionId = id;
      setTestId(id);
    }

    if (id > test.length) {
      questionId = 1;
      setTestId(questionId);
    }

    if (id < 1) {
      questionId = test.length;
      setTestId(questionId);
    }

    const filteredSentence = test.filter((item) => item.id === questionId);
    setSentence({ ...filteredSentence[0] });
    setTestWord(filteredSentence[0].questions[0]);
    if (filteredSentence[0].isCompleted) {
      setAnswer(filteredSentence[0].correctAnswer);
    } else {
      setAnswer("");
    }
  };

  useEffect(() => {
    const shuffledArray = shuffle(variants);
    setRandomVariants([...shuffledArray]);
  }, [sentence]);

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
      <h1>Lesson Topic</h1>
      <div className={styles.sentenceContainer}>
        <p className={styles.sentence}>{sentence.sentence}</p>
        <div className={styles.answerContainer}>
          {isNotCorrect
            ? <p className={styles.answer}>Is Not Correct</p>
            : <p className={styles.answer}>{answer}</p>
          }
        </div>
        <div className={styles.words}>
          {!sentence.isCompleted
            ? testWord.subQuestions.map((subQuestion, index) => {

              const variant = randomVariants[index];

              return (
                <div key={subQuestion.id} className={styles.word}>
                  <Button
                    size="l"
                    variant={`${variant as VariantType}`}
                    onclick={() => {
                      onClick(subQuestion.name, subQuestion.isCorrect);
                    }}>
                    {subQuestion.name}
                  </Button>
                </div>
              );
            })
            : <p className={styles.correct}>Correct!</p>}
        </div>
      </div>
      <div className={styles.pagination}>
        {test.map((item) => (
          <Button
            key={item.id}
            size="s"
            variant={item.isCompleted ? "success" : "primary"}
            onclick={() => {
              showSentence(item.id, item.isCompleted)
            }}>
            {item.id}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Lesson;