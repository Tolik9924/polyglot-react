import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main.tsx';
import Lesson from '../pages/Lesson/Lesson.tsx';
import CreateTest from '../pages/CreateTest/CreateTest.tsx';
import Dictionary from '../pages/Dictionary/Dictionary.tsx';
import Chat from '../pages/Chat/Chat.tsx';
import Profile from '../pages/Profile/Profile.tsx';

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/lesson/:id" element={<Lesson />} />
      <Route path="/dictionary/:id" element={<Dictionary />} />
      <Route path="/create-test" element={<CreateTest />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RouterWrapper;