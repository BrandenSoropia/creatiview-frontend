import ThreadMarker from '../ThreadMarker.svelte';

export default { title: 'Thread/ThreadMarker' };

export const rendersActiveThreadsMarker = () => ({
  Component: ThreadMarker,
  props: {
    handleClick: () => alert("I'm clicked!")
  }
});

export const rendersSubduedThreadsMarker = () => ({
  Component: ThreadMarker,
  props: {
    subdued: true,
    handleClick: () => alert("I'm clicked!")
  }
});
