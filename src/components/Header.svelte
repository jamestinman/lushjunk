<script>
  import { page } from '$app/stores';
</script>

<a href="/" class="absolute top-0 left-0 w-48 h-48">
  <img src="/logo.png" alt="Svelte Headless CMS" />
</a>

<header class="flex flex-row items-center h-28 bg-ljbrown">
  <div class="flex flex-1 flex-row items-center md:w-2/3 ml-48 p-2 my-5 gap-5 bg-ljbrown">
    <h1 class="text-xl md:text-4xl">{$page.data.title}</h1>

    <a href="/blog" class="flex-grow text-right underline">Blog</a>
    <a href="https://rummij.com/lushjunk" class="underline">Shop</a>
    {#if !($page.data.is_root)}
      <a href={$page.data.category.pathname} class="underline">
        {$page.data.category.title}
      </a>
    {/if}
  </div>
  <div class="flex hidden md:w-1/6">
    <!-- gutter margin -->
  </div>
</header>
