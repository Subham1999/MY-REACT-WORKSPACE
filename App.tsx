import * as React from 'react';
import './style.css';

import ParentComponent from './components/lesson_4/ParentComponent';
import ConditionalRendering from './components/lesson_5/ConditionalRendering';
import FunctionClick from './components/lesson_3/FunctionClick';
import ListComponent from './components/lesson_5/ListComponent';
import ListComponentAdv from './components/lesson_5/ListComponentAdv';
import FormCheck from './components/lesson_5/FormCheck';
import LifeCycle from './components/lesson_6/LifeCycle';

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
      <LifeCycle />
    </div>
  );
}
