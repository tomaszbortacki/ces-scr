import styled, { css } from "styled-components";
import { taskColor } from "../../utils";

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 20px;
  padding: 20px 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.05);
  font-weight: 500;
`;

export const ChartWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-weight: 600;
  position: relative;
  margin: 30px auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const CycleContainer = styled.div`
  width: calc(100% - 100px);
  overflow-x: auto;
  height: 150px;
  padding: 0 25px;
  margin: 0 25px;
  display: flex;
`;

export const TaskTile = styled.div<{ width: number; name: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
  opacity: 0.8;
  width: 100%;
  margin: 5px;
  max-width: ${(props) => props.width * 20}px;
  background: ${(props) => taskColor[props.name]};
  z-index: 1;
  position: relative;
  &:hover {
    opacity: 1;
    z-index: 3;
  }
`;

export const CycleWrapper = styled.div<{
  width: number;
  isStart: boolean;
  isEnd: boolean;
}>`
  border-left: ${(props) => (props.isStart ? "1px solid" : "2px dotted")}
    rgba(0, 0, 0, 0.5);
  border-right: ${(props) => props.isEnd && "1px solid"} rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: ${(props) =>
    props.isStart && props.isEnd
      ? "20px"
      : props.isStart
      ? "20px 0 0 20px"
      : props.isEnd
      ? "0 20px 20px 0"
      : ""};
  display: flex;
  width: ${(props) => props.width * 20}px;
  height: 80px;
  z-index: 2;
  align-items: end;
  position: relative;
  background: rgba(0, 0, 0, 0.05);
`;

export const Period = styled.div<{ isEnd?: boolean }>`
  position: absolute;
  bottom: -1.25rem;
  margin: 0 0 0 -0.5rem;
  align-self: flex-end;
  font-weight: 600;
  ${(props) =>
    props.isEnd &&
    css`
      right: 0;
    `}
`;
