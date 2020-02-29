import React from 'react';
import Box from './Box';

export default {
  title: 'Box',
  component: Box
};

export const defaultDisplay = () => <Box>I'm a box!</Box>;

export const boxWithStyledSystemProps = () => (
  <Box
    borderWidth="thin"
    borderColor="border.primary"
    borderStyle="solid"
    borderRadius="round"
    backgroundColor="background.primary"
    paddingY={2}
    paddingX={3}
  >
    I'm a box with style!
  </Box>
);
