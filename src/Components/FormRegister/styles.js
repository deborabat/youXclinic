import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  place-items: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #900c3f;
  color: white;
  font-size: 1em;
  width: 50vh;
  margin: 3em;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 3px;
`;

export const Form = styled.section`
  height: 100vh;
  width: 120vh;
  align-items: center;
  background-color: white;
  margin: 4em;
  padding: 1em;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: #900c3f;
  width: 60vh;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 3px;
`;

export const TextError = styled.text`
  color: #900c3f;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 3px;
`;
