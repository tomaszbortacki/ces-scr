import { ChangeEvent, useState } from "react";
import { TaskInterface } from "../Task/Task";
import { taskColor } from "../../utils";
import {
  FormContainer,
  FormWrapper,
  FormHeader,
  Input,
  Task,
  Button,
  TaskName,
} from "./Form-styles";

interface Props {
  setData: (data: TaskInterface[]) => void;
}

export const Form = ({ setData }: Props) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    {
      name: "Z1",
      period: 0,
      processing: 0,
      deadline: 0,
    },
  ]);

  const addInputHandler = () => {
    tasks.length < 10 &&
      setTasks([
        ...tasks,
        {
          name: `Z${tasks.length + 1}`,
          period: 0,
          processing: 0,
          deadline: 0,
        },
      ]);
  };

  const updateValue = (
    index: number,
    field: keyof Omit<TaskInterface, "name">,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setTasks(
      tasks.map((task, i) =>
        index === i
          ? {
              ...task,
              [field]: isNaN(value) ? 0 : value,
            }
          : task
      )
    );
  };

  const deleteItem = () => {
    setTasks((prevState) => [...prevState].slice(0, -1));
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>
          <h3>Ti</h3>
          <h3>Pi</h3>
          <h3>Di</h3>
        </FormHeader>
        {tasks.map((task, index) => (
          <Task key={index}>
            <TaskName bgColor={taskColor[task.name]}>{task.name}</TaskName>
            <Input
              type="text"
              value={task.period}
              onChange={(event) => updateValue(index, "period", event)}
            />
            <Input
              type="text"
              value={task.processing}
              onChange={(event) => updateValue(index, "processing", event)}
            />
            <Input
              type="text"
              value={task.deadline}
              onChange={(event) => updateValue(index, "deadline", event)}
            />
          </Task>
        ))}
      </FormWrapper>
      <FormWrapper>
        <Button type="button" onClick={addInputHandler}>
          Dodaj zadanie
        </Button>
        {tasks?.length > 1 && (
          <Button onClick={deleteItem}>Usuń zadanie</Button>
        )}
        <Button
          type="button"
          disabled={false}
          onClick={() => setData([...tasks])}
        >
          Generuj wykres
        </Button>
      </FormWrapper>
    </FormContainer>
  );
};
