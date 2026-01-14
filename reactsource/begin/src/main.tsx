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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
    <InputMultiSample2></InputMultiSample2>
  </StrictMode>,
);
