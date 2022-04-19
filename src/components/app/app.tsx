import React from 'react';
import { ControlPanel } from 'components/control-panel';
import { Form } from 'components/form';
import { TODOList } from 'components/TODO-list';

export default () => (
  <div className="container">
    <h1 className="title">todos</h1>
    <div className="content">
      <Form />
      <TODOList />
      <ControlPanel />
    </div>
  </div>
);
