<slot />

<style>
  :global(.stationary-background) {
    background: #8a614c;
    background-repeat: no-repeat;
    width: 100%;
    top: -80px;
    bottom: -80px;
    position: fixed;
    z-index: -1;
  }

  :global(.card-col) {
    display: flex;
    padding: 0.8em;
  }

  :global(.card) {
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1.5em 1em;
  }

  :global(.card a:hover) {
    color: transparent;
  }

  :global(.card-buttons) {
    margin-top: 0.8em;
  }

  :global(.btn-outline-light) {
    color: #113946;
    border-color: #113946;
    margin-bottom: 0.3em;
  }

  :global(.card-subtitle) {
    font-style: italic;
  }
</style>
