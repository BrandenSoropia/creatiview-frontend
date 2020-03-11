<script>
  import Icon from 'svelte-awesome';
  export let data = '';
  export let scale = 1;
  export let style = '';
</script>

<!-- Uses FontAwesome 5 -->
<Icon bind:data {scale} {style} />
