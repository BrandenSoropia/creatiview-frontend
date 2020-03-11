<script>
  export let text = '';
  export let writtenBy = '';
  export let dateCreated = '';
</script>

<style>
  .message-container {
    margin-bottom: 16px;
  }

  :global(.message-container:last-of-type) {
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 4px;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .written-by-name {
    font-weight: bold;
  }

  .date-created {
    color: grey;
  }
</style>

<div class="message-container">
  <p class="written-by-name">{writtenBy}</p>
  <p class="message">{text}</p>
  <p class="date-created">{new Date(dateCreated).toLocaleString()}</p>
</div>
