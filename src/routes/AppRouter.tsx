import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Main from '../pages/Main/Main.tsx';
import Lesson from '../pages/Lesson/Lesson.tsx';
import CreateTest from '../pages/CreateTest/CreateTest.tsx';

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/lesson/:id" element={<Lesson />} />
      <Route path="/create-test" element={<CreateTest />} />
    </Routes>
  );
};

export default RouterWrapper;