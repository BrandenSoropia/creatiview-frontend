<script>
  import isEmpty from 'lodash/isEmpty';
  import { ENTER_KEY_CODE } from '../common';
  let value = '';
  export let errors = {}; // exported for testing error state
  export let isSubmitDisabled = true; // exported for testing disabled state

  export let handleSubmit = () => {};
  function validate(e) {
    if (!e.target.value) {
      errors = {
        ...errors,
        message: true
      };
      isSubmitDisabled = true;
    } else {
      errors = {};
      isSubmitDisabled = false;
    }
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    margin-bottom: 8px;
  }

  textarea {
    border-radius: 3px;
    margin-bottom: 40px;
    height: 100%;
    width: 100%;
    resize: vertical;
    /* fit to container's width */
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  textarea.error {
    position: relative;
    border-color: red;
  }

  .error-container {
    cursor: default;
  }

  .error-container.error {
    position: relative;
  }

  p.error-message {
    position: absolute;
    left: 0;
    bottom: 8px;
    color: red;
  }

  button {
    cursor: pointer;
    margin-top: 8px;
  }

  button:disabled {
    cursor: not-allowed;
  }
</style>

<form
  id="message-form"
  on:submit|preventDefault={() => handleSubmit({ value })}
  on:invalid={validate}
  on:changed={validate}
  on:input={validate}>
  <label for="message">Message</label>
  <div class="error-container" class:error={errors.message}>
    <textarea
      on:keydown={e => {
        const isOnlyEnterPressed = !e.shiftKey && [e.keyCode, e.which].includes(ENTER_KEY_CODE);
        if (isOnlyEnterPressed) {
          e.preventDefault();
          handleSubmit({ value });
        }
        return false;
      }}
      class:error={errors.message}
      tabindex="0"
      type="text"
      placeholder="Begin typing here..."
      bind:value
      id="message" />
    {#if errors.message}
      <p class="error-message">Please provide a message.</p>
    {/if}
  </div>

  <button tabindex="0" disabled={isSubmitDisabled} type="submit">Submit</button>
</form>
