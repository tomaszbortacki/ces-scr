import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 30px auto;
  gap: 2rem;
  color: #fff;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px 80px;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 0.5rem 0;

  & > h3 {
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 100px;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;

export const Task = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  justify-content: space-around;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0 0 0.5rem 0;
  align-items: center;
`;

export const TaskName = styled.div<{ bgColor: string }>`
  font-weight: 600;
  position: absolute;
  left: -30px;
  color: ${(props) => props.bgColor};
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #2ecc71;
  margin: 0.5rem auto 0 auto;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
`;
