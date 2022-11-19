import { CycleWrapper, Period, TaskTile } from "../Chart/Chart-styles";

export interface IterationInterface {
  from: number;
  to: number;
  tasks: {
    from: number;
    to: number;
    name: string;
  }[];
}

interface Props {
  cycleIndex: number;
  iteration: IterationInterface;
  cyclesLength: number;
  majorCycle: number;
}

const Cycle = ({ cyclesLength, majorCycle, cycleIndex, iteration }: Props) => {
  return (
    <CycleWrapper
      key={cycleIndex}
      width={iteration.to - iteration.from}
      isStart={iteration.from === 0}
      isEnd={iteration.to === majorCycle}
    >
      <Period>{iteration.from}</Period>
      {iteration.tasks.map((task) => (
        <TaskTile
          key={iteration.from + task.name}
          width={task.to - task.from}
          name={task.name}
        >
          {task.name}
        </TaskTile>
      ))}
      {cycleIndex === cyclesLength - 1 && <Period isEnd>{majorCycle}</Period>}
    </CycleWrapper>
  );
};

export default Cycle;
