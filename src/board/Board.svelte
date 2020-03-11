<script>
  export let imageSrc = ''; // Either a url or an local file
  export let alt = '';
</script>

<style>
  .board-container {
    background-color: slategray;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<div class="board-container">
  <img src={imageSrc} {alt} />
</div>
