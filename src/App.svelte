<script>
  import Board from './Board';
  import ThreadList from './ThreadList';
</script>

<style>
  main {
    display: flex;
  }

  #board-section {
    width: 75%;
  }

  #thread-list-section {
    width: 25%;
  }
</style>

<main>
  <div id="board-section">
    <Board
      imageSrc={'https://drive.google.com/uc?id=17i1_TOLIO_9AzaGAES9zs_p314RADHS7'} />
  </div>
  <div id="thread-list-section">
    <ThreadList />
  </div>
</main>
