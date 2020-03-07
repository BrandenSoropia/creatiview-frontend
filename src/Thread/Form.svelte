<script>
  import isEmpty from 'lodash/isEmpty';
  import { ENTER_KEY_CODE } from '../common';
  let value = '';
  let errors = {};
  let isSubmitDisabled = true;

  export let handleSubmit = () => {};
  function validate(e) {
    if (!e.target.value) {
      errors = {
        ...errors,
        message: 'Please provide a message.'
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
    top: 44px;
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
      <p class="error-message">{errors.message}</p>
    {/if}
  </div>

  <button tabindex="0" disabled={isSubmitDisabled} type="submit">Submit</button>
</form>
