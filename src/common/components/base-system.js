/**
 * Basic styles that I think each component should have access to.
 */
import {
  compose,
  space,
  color,
  layout,
  background,
  position
} from 'styled-system';

const baseSystem = compose(space, color, layout, background, position);

export default baseSystem;
