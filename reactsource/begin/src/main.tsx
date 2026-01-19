import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Book from './component/Book.tsx';
import MyApp from './component/MyApp.tsx';
import Parent from './component/props/Parent.tsx';
import CardApp from './component/props/CardApp.tsx';
import Products from './component/props/Products.tsx';
import ParentCardlayout from './component/children/ParentCardLayout copy.tsx';
import Counter from './component/state/Counter.tsx';
import InputSample from './component/state/InputSample.tsx';
import InputMultiSample from './component/state/InputMultiSample.tsx';
import InputMultiSample2 from './component/state/InputMultiSample2.tsx';
import Say from './component/state/Say.tsx';
import Poster from './component/state/Poster.tsx';
import MyBtn from './component/state/MyBtn.tsx';
import CounterRef from './component/ref/CounterRef.tsx';
import InputRef from './component/ref/InputRef.tsx';
import Button from './component/event/Button.tsx';
import Button2 from './component/event/Button2.tsx';
import Toolbar from './component/event/Button3.tsx';
import Signup from './component/event/Signup.tsx';
import Signup2 from './component/event/Signup2.tsx';
import UserForm from './component/event/UserForm.tsx';
import LifeCycle from './component/effect/LifeCycle.tsx';
import LifeCycle2 from './component/effect/LifeCycle2.tsx';
import BookApp from './component/effect/BookApp.tsx';
import AddTask from './component/state/AddTask.tsx';
import TaskApp from './component/state/TaskApp.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    {/* <App /> */}
    {/* <Book></Book> */}
    {/* <MyApp></MyApp> */}
    {/* <Parent></Parent> */}
    {/* <CardApp></CardApp> */}
    {/* <Products></Products> */}
    {/* <ParentCardlayout></ParentCardlayout> */}
    {/* <Counter></Counter> */}
    {/* <InputSample></InputSample> */}
    {/* <InputMultiSample></InputMultiSample> */}
    {/* <InputMultiSample2></InputMultiSample2> */}
    {/* <Say></Say> */}
    {/* <Poster></Poster> */}
    {/* <MyBtn></MyBtn> */}
    {/* <CounterRef></CounterRef> */}
    {/* <InputRef></InputRef> */}
    {/* <Button></Button> */}
    {/* <Button2></Button2> */}
    {/* <Toolbar></Toolbar> */}
    {/* <Signup></Signup> */}
    {/* <Signup2></Signup2> */}
    {/* <UserForm></UserForm> */}
    {/* <LifeCycle></LifeCycle> */}
    {/* <LifeCycle2></LifeCycle2> */}
    {/* <BookApp></BookApp> */}
    <TaskApp></TaskApp>
  </>,
);
