<script>
  import isEmpty from 'lodash/isEmpty';
  import Message from './Message';
  import Form from './Form';

  export let messages = [];
  export let handleSetThread = () => {};
  export let handleSetMessage = () => {};
</script>

<style>
  .container {
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 3px;
    padding: 8px;
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
