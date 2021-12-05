import Actions from './actions';
import { State } from './state';
import updateObjInNastedArray from '../utils/arrayTools.js';


const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'TOGLE_DONE':
      return {
        ...state,
        tasks: updateObjInNastedArray(state.tasks, action.payload.id, action.payload.updates),
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'SELECT_LIST': {
      return {
        ...state,
        selectedList: action.payload,
      };
    }
    case 'SELECT_TASK': {
      return {
        ...state,
        selectedTask: action.payload,
      };
    }
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };

    case 'DELETE_LIST':
      return {
        ...state,
        lists: state.lists.filter((item: { id: string }) => item.id !== action.payload),
        tasks: state.tasks.filter((item: { listID: string }) => item.listID !== action.payload),
        selectedList: '',
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((item: { id: string }) => item.id !== action.payload),
      };

    case 'UPDATE_TASK':
      // eslint-disable-next-line no-case-declarations
      const { tasks, selectedTask } = state;
      return {
        ...state,
        tasks: updateObjInNastedArray(tasks, selectedTask, action.payload),
      };

    case 'UPDATE':
      return action.payload;

    case 'OPEN_MODEL':
      return {
        ...state,
        model: { ...state.model, open: true, ...action.payload },
      };

    case 'CLOSE_MODEL':
      return {
        ...state,
        model: { ...state.model, open: false },
      };

    case 'SET_USER':

      return {
        ...state,
        userId: action.payload,
      };

    default: {
      return state;
    }
  }
};


export default reducer;
