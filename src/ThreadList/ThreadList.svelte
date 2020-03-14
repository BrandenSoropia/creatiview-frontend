<script>
  import isEmpty from 'lodash/isEmpty';
  import Thread from '../Thread/Thread';

  export let threads = [];

  $: {
    console.log('### threads', threads);
  }
</script>

<style>
  .thread-list {
    background-color: var(--background-light);
    display: flex;
    flex-direction: column;
    padding: var(--space-three);
  }
</style>

<div class="thread-list">
  {#if isEmpty(threads)}
    <p>Nothing yet! Be the first by clicking on a focus area in the piece!</p>
  {:else}
    {#each threads as thread (thread.id)}
      <Thread messages={thread.messages} />
    {/each}
  {/if}
</div>
