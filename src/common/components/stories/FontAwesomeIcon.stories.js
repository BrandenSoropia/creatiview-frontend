import FontAwesomeIcon from '../FontAwesomeIcon.svelte';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default { title: 'common/components/FontAwesomeIcon' };

export const rendersDefaultSmallIcon = () => ({
  Component: FontAwesomeIcon,
  props: {
    data: faThumbsUp
  }
});

export const rendersScaledIcon = () => ({
  Component: FontAwesomeIcon,
  props: {
    data: faThumbsUp,
    scale: 3
  }
});
