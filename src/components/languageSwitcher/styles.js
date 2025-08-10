import styled, { css } from "styled-components";

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: sans-serif;
  padding: 20px;
  border-radius: 10px;
  display: inline-flex;
`;

export const SwitchWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 34px;
  background-color: #313244;
  border-radius: 17px;
  cursor: pointer;
  padding: 3px;
  box-sizing: border-box;
`;

export const SwitchButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--hot-pink);

  display: flex;
  align-items: center;
  justify-content: center;
  color: #11111b;
  font-weight: bold;
  font-size: 14px;

  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ active }) =>
    active &&
    css`
      transform: translateX(calc(70px - 34px));
    `}
`;
