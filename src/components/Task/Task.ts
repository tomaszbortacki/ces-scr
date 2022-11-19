import { ChartDataInterface } from "../Chart/Chart";
import { Period } from "../Period/Period";

export interface TaskInterface {
  name: string;
  period: number;
  processing: number;
  deadline: number;
}

interface RangeInterface {
  from: number;
  to: number;
}
interface SingleTaskInterface extends RangeInterface {
  name: string;
}
interface SingleCycleInterface extends RangeInterface {
  tasks: SingleTaskInterface[];
}

export class Tasks {
  private taskList: TaskInterface[] = [];
  private periods: Period[] = [];
  private minPeriod: number = 0;
  private maxPeriod: number = 0;

  constructor(tasksList: Array<TaskInterface>) {
    this.setTaskList(tasksList);
  }

  private calculatePeriods() {
    let min: number = 1000000;
    let max: number = -1;

    for (let task of this.taskList) {
      if (task.period < min) {
        min = task.period;
      }

      if (task.period > max) {
        max = task.period;
      }
    }

    for (let task of this.taskList) {
      if (max % task.period !== 0) {
        console.error(
          "Maksymalny cykl musi być wielokrotnościa cyklu wcześniejszych zadań"
        );
      }
    }

    this.minPeriod = min;
    this.maxPeriod = max;
  }

  private taskToPeriod(): void {
    this.taskList.sort((a, b) => a.period - b.period);
    const periods: number = this.maxPeriod / this.minPeriod;

    for (let i = 0; i < periods; i++) {
      this.periods.push(new Period(i, this.minPeriod));
    }

    this.taskList?.forEach((task) => {
      let index = 1;

      this.periods?.forEach(() => {
        const timeRange = this.minPeriod * index;

        if (timeRange % task.period === 0) {
          const range = timeRange / this.minPeriod;
          const iterator = task.period / this.minPeriod;
          const startIterator = range - iterator;
          const endIterator = range;

          for (let i = startIterator; i < endIterator; i++) {
            if (this.periods[i].checkFreeSpace(task.processing)) {
              this.periods[i].tasks.push(task);
              break;
            }
          }
        }

        index++;
      });
    });
  }

  public setTaskList(tasksList: Array<TaskInterface>) {
    this.taskList = tasksList;
    this.calculatePeriods();
    this.taskToPeriod();
  }

  public setCPUUsage(): number {
    let n = 0;

    for (let t of this.taskList) {
      n += t.processing / t.period;
    }

    return n;
  }

  public setChartData(): ChartDataInterface {
    const cycles: SingleCycleInterface[] = this.periods.map((part, index) => {
      const tasks: SingleTaskInterface[] = part.tasks.map(
        (task, taskIdx, arr) => {
          const from =
            index * this.minPeriod +
            arr.slice(0, taskIdx).reduce((acc, el) => acc + el.processing, 0);
          return {
            from,
            to: from + task.processing,
            name: task.name,
          };
        }
      );
      return {
        from: index * this.minPeriod,
        to: (index + 1) * this.minPeriod,
        tasks,
      };
    });

    return {
      majorCycle: this.maxPeriod,
      cycles,
    };
  }
}
