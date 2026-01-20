import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TaskApp from './component/reducer/TaskApp.tsx';
import Memo from './component/memo/Memo.tsx';
import Parent from './component/memo/Parent.tsx';

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
    {/* <TaskApp></TaskApp> */}
    {/* <UserApp></UserApp> */}
    {/* <UserApp2></UserApp2> */}
    {/* <Memo></Memo> */}
    <Parent></Parent>
  </>,
);
