<script>
  import ThreadMarker from '../Thread/ThreadMarker.svelte';
  export let imageSrc = ''; // Either a url or an local file
  export let alt = '';
  export let threadMarkers = [];
  export let onThreadMarkerClick = () => {};

  // TODO: Place the center of the icon where the click happend
  const placeThreadMarkerWithinClickedElement = e => {
    var rect = e.target.getBoundingClientRect();
    var posX = e.clientX - rect.left; //x position within the element.
    var posY = e.clientY - rect.top; //y position within the element.

    threadMarkers = [
      ...threadMarkers,
      { tempId: threadMarkers.length + 1, posX, posY }
    ];
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

  img {
    max-width: 100%;
    max-height: 100%;
    /* disable highlighting on image double click */
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
</style>

<div class="board-container">
  <img
    draggable="false"
    src={imageSrc}
    {alt}
    on:click|preventDefault={placeThreadMarkerWithinClickedElement} />
  <!-- TODO: Use a better, more consistent ID system for these! -->
  {#each threadMarkers as threadMarker (threadMarker.tempId)}
    <ThreadMarker
      posX={threadMarker.posX}
      posY={threadMarker.posY}
      handleClick={onThreadMarkerClick} />
  {/each}
</div>
