import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  height: ${({ h }) => (h ? h : "100%")};
  flex-flow: ${({ flow }) => (flow ? flow : "")};
  border-radius: ${({ br }) => br || null};
`;
