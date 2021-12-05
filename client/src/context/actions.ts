import {
  State, task, list, modelState,
} from './state';

type Actions ={
    type: 'ADD_TASK';
    payload: task;
}|{
    type: 'ADD_LIST';
    payload: list;
}|
{
    type: 'SELECT_LIST'|'DELETE_LIST'|'SELECT_TASK'|'DELETE_TASK';
    payload: string;
}|{
    type: 'CLOSE_MODEL';
}|{
    type: 'OPEN_MODEL';
    payload: modelState;
}|{
    type: 'UPDATE_TASK'|'TOGLE_DONE';
    payload: any;
}|{
    type: 'UPDATE';
    payload: State;
}|{type: 'SET_USER'; payload: string};

export default Actions;
