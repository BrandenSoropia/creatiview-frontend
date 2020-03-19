import ThreadList from '../ThreadList.svelte';
import { mockThreads } from '../__mocks__/thread-list-state.mock';

export default { title: 'ThreadList' };

export const emptyThreadState = () => ({
  Component: ThreadList,
  props: {
    threads: []
  }
});

export const showsAListOfThreads = () => ({
  Component: ThreadList,
  props: {
    threads: mockThreads
  }
});
