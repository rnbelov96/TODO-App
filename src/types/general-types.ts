import { AppInitialStateType } from './redux/app-reducer';

export type TODOType = {
  text: string;
  done: boolean;
  id: string;
};

export type FullStateType = {
  app: AppInitialStateType;
};
