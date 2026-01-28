import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { decrease, increase } from '../modules/counter';
import type { RootState } from '../modules';
import type { Props } from '../types/type';

// 컴포넌트와 저장소 연동
const CountContainer = ({ number, increase, decrease }: Props) => {
  return (
    <Counter number={number} increase={increase} decrease={decrease}></Counter>
  );
};

export default connect(
  (state: RootState) => ({
    number: state.counter.number,
  }),
  { increase, decrease },
)(CountContainer);
