import styled from "styled-components";

export const Box = styled.div`
  width: ${({ w }) => (w ? w : "min(98%, 88em)")};
  margin-inline: ${({ ml }) => (ml ? ml : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  height: ${({ h }) => (h ? h : "")};
  background: ${({ theme, themeModeTwo }) =>
    themeModeTwo && theme.themeModeTwo};
  border-radius:${({br})=> br || null}
`;
