import { ChartHeader, ChartWrapper, CycleContainer } from "./Chart-styles";
import Cycle, { IterationInterface } from "../Cycle/Cycle";

export interface ChartDataInterface {
  majorCycle: number;
  cycles: IterationInterface[];
}

interface Props {
  chartData?: ChartDataInterface;
  cpuUsage: number;
}

export const Chart = ({ chartData, cpuUsage }: Props) => {
  if (!chartData || !chartData?.cycles) return null;

  return (
    <ChartWrapper>
      {chartData.cycles.length > 0 && (
        <ChartHeader>
          Wykorzystanie procesora:{" "}
          {Math.floor(Number(cpuUsage.toFixed(2)) * 100)}%
        </ChartHeader>
      )}
      {cpuUsage <= 1 && (
        <CycleContainer>
          {chartData.cycles.map((iteration, cycleIndex) => (
            <Cycle
              majorCycle={chartData.majorCycle}
              cycleIndex={cycleIndex}
              cyclesLength={chartData.cycles.length}
              iteration={iteration}
              key={cycleIndex}
            />
          ))}
        </CycleContainer>
      )}
    </ChartWrapper>
  );
};
