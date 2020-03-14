<script>
  export let text = '';
  export let writtenBy = '';
  export let dateCreated = '';
</script>

<style>
  .message-container {
    margin-top: var(--space-two);
  }

  .message-container:first-of-type {
    margin-top: 0;
  }

  .message-container:last-of-type {
    margin-bottom: var(--space-two);
  }

  p {
    margin-bottom: var(--space-one);
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .written-by-name {
    font-weight: bold;
  }
</style>

<div class="message-container">
  <p class="written-by-name">
    {writtenBy} said on {new Date(dateCreated).toLocaleString()}
  </p>
  <p class="message">{text}</p>
</div>
