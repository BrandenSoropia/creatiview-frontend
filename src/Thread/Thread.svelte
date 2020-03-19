<script>
  import isEmpty from 'lodash/isEmpty';
  import Message from './Message.svelte';
  import Form from './Form.svelte';

  export let messages = [];
  // Exposed as props for Storybook
  export let handleSetThread = () => {};
  export let handleSetMessage = () => {};
</script>

<style>
  .container {
    background: var(--background-white);
    border-style: solid;
    border-color: black;
    border-width: var(--border-width-thin);
    border-radius: var(--border-radius-round);
    padding: var(--space-one);
    margin-bottom: var(--space-two);
  }

  .container:last-of-type {
    margin-bottom: 0;
  }
</style>

<div class="container">
  {#if isEmpty(messages)}
    <Form handleSubmit={handleSetThread} />
  {:else}
    {#each messages as message (message.id)}
      <Message
        {...message}
        writtenBy={`${message.user.firstName} ${message.user.lastName}`} />
    {/each}
    <Form handleSubmit={handleSetMessage} />
  {/if}
</div>
