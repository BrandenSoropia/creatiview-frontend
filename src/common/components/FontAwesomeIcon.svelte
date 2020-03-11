<script>
  import Icon from 'svelte-awesome';
  export let data = '';
  export let scale = 1;
</script>

<!-- Uses FontAwesome 5 -->
<Icon bind:data {scale} />
