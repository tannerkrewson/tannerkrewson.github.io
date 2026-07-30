<script>
  let {
    isOpen = $bindable(false),
    title = '',
    children
  } = $props();

  let dialogRef = $state(null);
  let previousFocus = null;

  function getFocusable(el) {
    if (!el) return [];
    return Array.from(
      el.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
    );
  }

  $effect(() => {
    if (isOpen && dialogRef) {
      previousFocus = document.activeElement;
      // Focus the first focusable element (close link)
      const focusable = getFocusable(dialogRef);
      if (focusable.length) focusable[0].focus();
    }
  });

  function close() {
    isOpen = false;
    // restore focus to trigger element
    requestAnimationFrame(() => {
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    });
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) close();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'Tab') {
      const focusable = getFocusable(dialogRef);
      if (focusable.length < 1) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="backdrop"
    onclick={onBackdropClick}
    onkeydown={onKeydown}
    role="presentation"
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="modal"
      bind:this={dialogRef}
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      aria-label={title || 'Project details'}
      onkeydown={onKeydown}
    >
      <div class="modal-header">
        <h2 class="modal-title">{title}</h2>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a
          href="#"
          class="close-link"
          onclick={(e) => { e.preventDefault(); close(); }}
          aria-label="Close"
        >
          [x] close
        </a>
      </div>
      <div class="modal-body">
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.7);
    overflow-y: auto;
  }

  .modal {
    background: var(--surface-page);
    border: 1px solid var(--line-subtle);
    max-width: 36rem;
    width: 100%;
    padding: 2rem 1.75rem;
    margin-top: 3rem;
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
    gap: 1rem;
  }

  .modal-title {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-strong);
    line-height: 1.3;
  }

  .close-link {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .close-link:hover {
    color: var(--text-strong);
  }

  .modal-body {
    font-size: 0.875rem;
    line-height: 1.7;
    color: var(--text-default);
  }

  .modal-body :global(a) {
    color: var(--text-display-accent);
  }

  .modal-body :global(a:hover) {
    color: var(--text-strong);
  }

  .modal-body :global(p) {
    margin-bottom: 0.75rem;
  }

  .modal-body :global(p:last-child) {
    margin-bottom: 0;
  }

  .modal-body :global(ul) {
    list-style: none;
    padding: 0;
    margin: 0 0 0.75rem 0;
  }

  .modal-body :global(li) {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.4rem;
  }

  .modal-body :global(li::before) {
    content: '-';
    position: absolute;
    left: 0;
    color: var(--text-muted);
  }

  .modal-body :global(.detail-label) {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  .modal-body :global(.detail-row) {
    margin-bottom: 0.5rem;
  }

  .modal-body :global(img) {
    max-width: 100%;
    border: 1px solid var(--line-subtle);
    margin: 1rem 0;
    display: block;
  }
</style>
