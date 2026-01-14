import Cardlayout from './CardLayout';

function ParentCardlayout() {
  return (
    <>
      <Cardlayout>
        <p>Props of Component</p>
      </Cardlayout>

      <Cardlayout title={'Details'}>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </Cardlayout>

      <Cardlayout title={'Contact'}>
        <p>Email : example@example.com</p>
        <p>Phone : 123-456-7890</p>
      </Cardlayout>
    </>
  );
}

export default ParentCardlayout;
