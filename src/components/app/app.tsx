import React from 'react';
import { ControlPanel } from '../control-panel';
import { Form } from '../form';
import { TODOList } from '../TODO-list';

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
