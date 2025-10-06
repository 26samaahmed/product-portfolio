<script lang="ts">
  import type { BucketListItem } from '$lib/types';
  export let bucket_list: BucketListItem[];

</script>

<main>
  <div id="extras" class="mt-44">
    <p class="text-5xl font-sans">Senior Year Bucket List</p>

    <div>
      <p class="mt-2 text-xl text-gray-600">
        {bucket_list.filter(i => i.done).length} / {bucket_list.length} completed
      </p>
      
      <div class="w-2/4 bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
        <div 
          class="bg-green-300 h-4" 
          style="width: {100 * bucket_list.filter(i => i.done).length / bucket_list.length}%"
        ></div>
      </div>
      
      
      <ul class="mt-6 space-y-4 text-2xl border w-2/4 p-3 rounded-xl shadow">
        {#each bucket_list as item}
          <li class="flex items-center justify-between">
            <span>{item.text}</span>
            <span
              class="ml-4 px-3 py-1 text-sm rounded-full 
                    {item.done 
                      ? 'bg-green-200 text-green-700' 
                      : 'bg-gray-200 text-gray-700'}"
            >
              {item.done ? "✓ Done" : "Not Yet"}
            </span>
          </li>
        {/each}
      </ul>
    </div>
    <!-- add images here -->
  </div>
</main>