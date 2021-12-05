export type list= {
    id: string;
    title: string;
};
export type task= {
    listID: string;
     id: string;
     title: string;
     done: boolean;
     doneDate: Date | null;
     creationDate: Date;
     echeance?: Date;
     note?: string;
  }

export type modelState={open: boolean; component?: unknown};

export interface State{
    userId: string;
    lists: list[];
    tasks: task[ ];
    model: modelState;
    selectedList: string;
    selectedTask: string;
}
