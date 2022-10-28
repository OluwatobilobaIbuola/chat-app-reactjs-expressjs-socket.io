import styled from "styled-components";

export const Text = styled.span`
  line-height: 24px;
  letter-spacing: 3px;
  border-radius:${({br})=> br || null}
`;
