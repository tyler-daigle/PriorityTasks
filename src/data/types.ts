export enum Priority {
  LEVEL_1, // most urgent tasks
  LEVEL_2,
  LEVEL_3,
  LEVEL_4, // less urgent tasks
}

export interface Task {
  taskId: string;
  taskName: string;
  startDate: Date;
  workedList: WorkedTime[];
  priority: Priority;
}

export interface WorkedTime {
  date: Date;
  amountOfTime: number; // seconds
}
