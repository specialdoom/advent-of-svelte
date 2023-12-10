import getAll from "./get-all";

/** Get the {@link TaskHttpClient} module for the elves tasks CRUD provider. */
export default function getChildHttpClient(): TaskHttpClient {
  return Object.freeze({
    getAll
  });
}

/** Http client interface for the task CRUD. */
export interface TaskHttpClient {
  /** Get all the tasks. */
  getAll(): Promise<Task[]>
}

/** Type of the {@link Task}. */
type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'

/** Represents a task done by an elf. */
export interface Task {
  /** Name of the elf that done the task. */
  elf: string

  /** Type of the task. */
  task: TaskType

  /** Number of minutes needed to accomplish the task. */
  minutesTaken: number

  /** Date of the accomplishments. */
  date: string;
}
