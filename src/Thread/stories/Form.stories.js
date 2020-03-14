import Form from '../Form.svelte';

export default { title: 'Thread/Form' };

const mockHandleSubmit = formData => {
  console.log('### event', formData);
};

export const handlesFormInteractions = () => ({
  Component: Form,
  props: {
    handleSubmit: mockHandleSubmit
  }
});

export const errorState = () => ({
  Component: Form,
  props: {
    handleSubmit: mockHandleSubmit,
    errors: {
      message: true
    }
  }
});
