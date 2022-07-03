import * as React from 'react';
import './style.css';

import ParentComponent from './components/lesson_4/ParentComponent';
import ConditionalRendering from './components/lesson_5/ConditionalRendering';
import FunctionClick from './components/lesson_3/FunctionClick';
import ListComponent from './components/lesson_5/ListComponent';
import ListComponentAdv from './components/lesson_5/ListComponentAdv';
import FormCheck from './components/lesson_5/FormCheck';
import LifeCycle from './components/lesson_6/LifeCycle';
// import ClickCounter from './components/HOC/without_hoc/ClickCounter';
// import HoverCounter from './components/HOC/without_hoc/HoverCounter';
import ClickCounter from './components/HOC/with_hoc/ClickCounter';
import HoverCounter from './components/HOC/with_hoc/HoverCounter';

export default function App() {
  let appName = 'My First App';
  return (
    <div>
      {/* <FunctionClick text="click here" /> */}
      {/* <ConditionalRendering /> */}
      {/* <ParentComponent /> */}
      {/* <ListComponent /> */}
      {/* <ListComponentAdv /> */}
      {/* <FormCheck /> */}
      {/* <LifeCycle /> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
