import React from 'react';
import { ControlPanel } from 'components/control-panel';
import { CreateForm } from 'components/create-form';
import { TODOList } from 'components/TODO-list';

export default () => (
  <div className="container">
    <h1 className="title">todos</h1>
    <div className="content">
      <CreateForm />
      <TODOList />
      <ControlPanel />
    </div>
  </div>
);
