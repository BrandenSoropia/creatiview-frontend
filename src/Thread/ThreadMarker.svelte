<script>
  import FontAwesomeIcon from '../common/components/FontAwesomeIcon';
  import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
  export let handleClick = () => {};
  export let subdued = false;
  export let posX = 0;
  export let posY = 0;

  const baseStyles = 'width: 32px; height: 40px;';
  const activeStyles = baseStyles + 'fill: #69306D;';
  const subduedStyles = baseStyles + 'fill: #444444;';
</script>

<style>
  .thread-marker {
    position: absolute;
    cursor: pointer;
    height: 40px;
    width: 32px;
    z-index: 1;
  }
</style>

<div
  tabindex="0"
  role="button"
  class="thread-marker"
  class:subdued
  style="top: {posY}px; left: {posX}px;"
  on:click|preventDefault|stopPropagation={handleClick}>
  <FontAwesomeIcon
    tabindex="0"
    data={faCommentAlt}
    style={subdued ? subduedStyles : activeStyles} />
</div>
