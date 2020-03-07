import Message from '../Message.svelte';

export default { title: 'Message' };

const commonProps = {
  user: {
    name: 'Sandra'
  },
  dateCreated: '2020-03-07T18:58:20.234Z'
};
export const withText = () => ({
  Component: Message,
  props: {
    ...commonProps,
    text: 'some text'
  }
});

export const withLongText = () => ({
  Component: Message,
  props: {
    ...commonProps,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa egestas, volutpat mauris sed, ullamcorper elit. Mauris hendrerit lectus vitae est commodo, in pellentesque augue mattis. Donec ultricies purus non pellentesque placerat. Aenean ex nunc, lacinia vitae orci vitae, placerat accumsan risus. Maecenas ut convallis sapien. Vivamus sed erat quam. Cras vitae consectetur urna.'
  }
});
