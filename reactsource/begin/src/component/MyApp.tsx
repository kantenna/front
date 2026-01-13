import type { Topic } from '../types/topic';
import Article from './Article';
import Header from './Header';
import Nav from './Nav';

const topics: Topic[] = [
  { id: 1, title: 'html', body: 'html 이론' },
  { id: 2, title: 'css', body: 'css 이론' },
  { id: 3, title: 'js', body: 'js 이론' },
];

function MyApp() {
  return (
    <>
      <Header title={'WEB 구성 요소'}></Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </>
  );
}

export default MyApp;
