import Thread from '../Thread.svelte';
import { messages as mockMessages } from '../__mocks__/thread-state';

export default { title: 'Thread' };

const mockHandleSetThread = data => {
  console.log('### set thread data', data);
};

const mockHandleSetMessage = data => {
  console.log('### set message data', data);
};

export const displayNewThread = () => ({
  Component: Thread,
  props: {
    messages: [],
    handleSetThread: mockHandleSetThread,
    handleSetMessage: mockHandleSetMessage
  }
});

export const displayExistingThread = () => ({
  Component: Thread,
  props: {
    messages: mockMessages,
    handleSetThread: mockHandleSetThread,
    handleSetMessage: mockHandleSetMessage
  }
});
