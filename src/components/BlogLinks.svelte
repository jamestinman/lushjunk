<script>
  import { page } from '$app/stores';
  $: note = $page.data;
</script>

{#if note.links.length}    
  <h2>Related articles</h2>
  <div class="flex flex-col gap-5 md:w-2/3 mx-auto">
    <ul>
      {#each note.links as link}
        <li>
          <a class="link" href={link.pathname}>
            {link.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
