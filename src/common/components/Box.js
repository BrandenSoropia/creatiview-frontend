import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border, shadow } from 'styled-system';
import baseSystem from './base-system';

const Box = styled.div`
  ${baseSystem}
  ${border}
  ${shadow}
`;

Box.displayName = 'Box';

export default Box;
