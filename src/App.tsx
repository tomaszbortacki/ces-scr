import { useEffect, useState } from "react";
import { TaskInterface, Tasks } from "./components/Task/Task";
import { Chart, ChartDataInterface } from "./components/Chart/Chart";
import { Form } from "./components/Form/Form";

const App = () => {
  const [inputData, setInputData] = useState<TaskInterface[]>([]);
  const [chartData, setChartData] = useState<ChartDataInterface>();
  const [cpuUsage, setCPUUsage] = useState<number>(0);

  useEffect(() => {
    const dataInstance = new Tasks(inputData);
    setChartData(dataInstance.setChartData());
    setCPUUsage(dataInstance.setCPUUsage());
  }, [inputData]);

  return (
    <div>
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Systemy czasu rzeczywistego - Szeregowanie zadań cyklicznych - CES
      </h1>
      <Form setData={setInputData} />
      <Chart cpuUsage={cpuUsage} chartData={chartData} />
    </div>
  );
};

export default App;
