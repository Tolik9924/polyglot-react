import React from 'react';

import { Card, Typography } from "core_ui_design_system";

import styles from './Main.module.css';

const Main = () => {
  return(
    <div className={styles.lessonsPage}>
      <h1 className={styles.header}>Lessons</h1>
      <div className={styles.cards}>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 1</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 2</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 3</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 4</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 3</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 3</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 3</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
        <Card
          size="s"
          title={
            <div>
              <Typography variant="title-02">Lesson 3</Typography>
              <Typography variant="body-02">Basic form of the verb</Typography>
            </div>
          }
          subtitle={
            <div>
              <Typography variant="title-02">Click on more to go to the lesson.</Typography>
            </div>
          }
          addMore
        >
          <div>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
            <Typography variant="body-02">Card content</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Main;