import { State } from './state';

const initialState: State = {
  userId: '',
  lists: [
    { id: '1', title: 'Bienvenu' },

  ],
  tasks: [
    {
      listID: '1',
      id: '1',
      title: 'Cette liste est crée automatiquement vour toi',
      done: false,
      creationDate: new Date(),
      doneDate: null,
    },

  ],
  model: {
    open: false,
  },
  selectedList: '1',
  selectedTask: '1',
};

export default initialState;
