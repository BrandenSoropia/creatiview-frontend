<script>
  export let text = '';
  export let user = {};
  export let dateCreated = '';
</script>

<style>
  p {
    font-size: 16px;
    line-height: 1.25;
  }

  .created-by-name {
    font-size: 20px;
    font-weight: bold;
  }

  .date-created {
    color: grey;
  }
</style>

<div>
  <p class="created-by-name">{user.name}</p>
  <p class="message">{text}</p>
  <p class="date-created">{new Date(dateCreated).toLocaleString()}</p>
</div>
