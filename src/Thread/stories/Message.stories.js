import Message from '../Message.svelte';

export default { title: 'Message' };

export const withText = () => ({
  Component: Message,
  props: {
    user: {
      name: 'Sandra'
    },
    text: 'some text',
    dateCreated: '2020-03-07T18:58:20.234Z'
  }
});
