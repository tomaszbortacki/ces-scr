import { TaskInterface } from "../Task/Task";

export class Period {
  id: number;
  maxCapacity: number;
  tasks: TaskInterface[] = [];

  constructor(id: number, maxCapacity: number) {
    this.id = id;
    this.maxCapacity = maxCapacity;
  }

  public checkFreeSpace(time: number) {
    let currentSize = 0;

    for (let t of this.tasks) {
      currentSize += t.processing;
    }

    return !(time + currentSize > this.maxCapacity);
  }
}
