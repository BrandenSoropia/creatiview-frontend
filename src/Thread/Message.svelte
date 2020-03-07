<script>
  export let text;
  export let user;
  export let dateCreated;
</script>

<style>
  p {
    font-size: 12px;
  }

  .created-by-name {
    font-size: 20px;
  }

  .date-created {
    color: grey;
  }
</style>

<div>
  <p class="created-by-name">{user.name}</p>
  <p class="message">{text}</p>
  <p class="date-created">{new Date(dateCreated).toDateString()}</p>
</div>
