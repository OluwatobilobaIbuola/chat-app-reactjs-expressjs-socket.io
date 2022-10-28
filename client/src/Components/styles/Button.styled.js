import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  width: ${({ w }) => (w ? w : "")};
  height: 60px;
  cursor: pointer;
  background: ${({ theme }) => theme.themeMode};
  color: ${({ theme }) => theme.modeReverse};
  padding: 0.5em 1.5em;
  font-weight: 600;
  border: 0;
  position: relative;
  isolation: isolate;
  display: inline-grid;
  place-content: center;
  clip-path: polygon(
    0.5em 0%,
    100% 0,
    100% calc(100% - 0.5em),
    calc(100% - 0.5em) 100%,
    0 100%,
    0% 0.5em
  );
  transition: color 250ms;

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.secondary}, ${theme.primary})`};
    z-index: -2;
  }

  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.themeMode};
    z-index: -1;
    clip-path: polygon(
      0.5em calc(0.5em + 0.5em * 0.5),
      calc(0.5em + 0.5em * 0.5) 0.5em,
      calc(100% - 0.5em) 0.5em,
      calc(100% - 0.5em) calc(100% - calc(0.5em + 0.5em * 0.5)),
      calc(100% - calc(0.5em + 0.5em * 0.5)) calc(100% - 0.5em),
      calc(0.5em) calc(100% - 0.5em)
    );
    transition: clip-path 500ms;
  }

  :hover {
    color: white;
  }

  :hover::after {
    clip-path: polygon(
      calc(100% - 0.5em) calc(100% - calc(0.5em + 0.5em * 0.5)),
      calc(100% - 0.5em) 0.5em,
      calc(100% - 0.5em) 0.5em,
      calc(100% - 0.5em) calc(100% - calc(0.5em + 0.5em * 0.5)),
      calc(100% - calc(0.5em + 0.5em * 0.5)) calc(100% - 0.5em),
      calc(100% - calc(0.5em + 0.5em * 0.5)) calc(100% - 0.5em)
    );
  }
`;
