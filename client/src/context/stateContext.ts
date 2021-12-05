/* eslint-disable semi */
export default interface StateContext {
    lists: Array<{ id: number; title: string }>;
    tasks: Array<{
        listId: number;
        payload: Array<{ id: number; title: string }>;
    }>;
    selectedList: number;
}
