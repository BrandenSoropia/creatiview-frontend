<script>
  import isEmpty from 'lodash/isEmpty';
  import Thread from '../Thread';

  export let threads = [];
</script>

<style>
  .thread-list {
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    padding: var(--space-three);
  }

  .empty-list-container {
    background-color: var(--background-white);
    border-style: solid;
    border-color: black;
    border-width: var(--border-width-thin);
    border-radius: var(--border-radius-round);
    padding: var(--space-two);
  }

  .empty-list-container .message {
    text-align: center;
  }
</style>

<div class="thread-list">
  {#if isEmpty(threads)}
    <div class="empty-list-container">
      <p class="message">
        Nothing yet! Be the first by clicking on a focus area in the piece!
      </p>
    </div>
  {:else}
    {#each threads as thread (thread.id)}
      <Thread messages={thread.messages} />
    {/each}
  {/if}
</div>
