import styled from 'styled-components';
import { border, shadow, flexbox } from 'styled-system';
import baseSystem from './base-system';

const Flex = styled.div`
  ${baseSystem}
  ${flexbox}
  ${border}
  ${shadow}
  display: flex;
`;

Flex.displayName = 'Flex';

export default Flex;
