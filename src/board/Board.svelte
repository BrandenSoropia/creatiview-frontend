<script>
  import ThreadMarker from '../Thread/ThreadMarker.svelte';
  export let imageSrc = ''; // Either a url or an local file
  export let alt = '';
  export let threads = [];
  export let onThreadMarkerClick = () => {};

  // TODO: Place the center of the icon where the click happend
  const placeThreadMarkerWithinClickedElement = e => {
    var rect = e.target.getBoundingClientRect();

    /**
     * Figure out how to make sure threads don't exceed window's view
     *
     * Easy Idea: Center image and make sure there is empty space padding all around it
     * Gross Math Idea: Since ThreadMarker's dimensions are hard-coded, offset appropriately if out of bounds
     */
    var posX = e.clientX - rect.left; // x position within the element.
    var posY = e.clientY - rect.top; // y position within the element.

    threads = [...threads, { tempId: threads.length + 1, posX, posY }];
  };
</script>

<style>
  .board-container {
    position: relative;
    background-color: slategray;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .centering-hack {
    margin: 0 auto;
  }

  img {
    max-width: 90%;
    max-height: 90%;
    /* disable highlighting on image double click */
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
</style>

<div class="board-container">
  <div class="centering-hack">
    <img
      draggable="false"
      src={imageSrc}
      {alt}
      on:click|preventDefault={placeThreadMarkerWithinClickedElement} />
    <!-- TODO: Use a better, more consistent ID system for these! -->
    {#each threads as thread (thread.tempId)}
      <ThreadMarker
        posX={thread.posX}
        posY={thread.posY}
        handleClick={onThreadMarkerClick} />
    {/each}
  </div>
</div>
