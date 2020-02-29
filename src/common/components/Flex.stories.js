import React from 'react';
import Flex from './Flex';
import Box from './Box';

export default {
  title: 'Flex',
  component: Flex
};

export const defaultDisplay = () => <Flex>I'm a Flex!</Flex>;

export const wrapped = () => (
  <Flex flexWrap="wrap">
    {[...new Array(100)].map((_, idx) => (
      <Box
        key={`box-${idx}`}
        borderWidth="thin"
        borderStyle="solid"
        width="45%"
        background="tan"
        padding={2}
      >
        {idx}
      </Box>
    ))}
  </Flex>
);

export const flexWithStyledSystemProps = () => (
  <Flex
    borderWidth="thin"
    borderColor="border.primary"
    borderStyle="solid"
    borderRadius="round"
    backgroundColor="background.primary"
    paddingY={2}
    paddingX={3}
  >
    I'm a Flex with style!
  </Flex>
);
