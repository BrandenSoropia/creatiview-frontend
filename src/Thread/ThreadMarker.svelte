<script>
  import FontAwesomeIcon from '../common/components/FontAwesomeIcon';
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
  export let handleClick = () => {};
  export let subdued = false;

  const baseStyles = 'width: 32px; height: 40px;';
  const activeStyles = baseStyles + 'fill: red;';
  const subduedStyles = baseStyles + 'fill: gray;';
</script>

<style>
  .thread-marker {
    cursor: pointer;
    height: 40px;
    width: 32px;
  }
</style>

<!-- TODO: Create container component for creating threads on click -->
<div
  role="button"
  class="thread-marker"
  class:subdued
  on:click|preventDefault={handleClick}>
  <FontAwesomeIcon
    tabindex="0"
    data={faMapMarkerAlt}
    style={subdued ? subduedStyles : activeStyles} />
</div>
