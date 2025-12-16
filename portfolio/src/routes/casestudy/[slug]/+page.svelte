<script lang="ts">
  import CaseStudy from '$lib/components/CaseStudy.svelte';
  import type { CaseStudy as CaseStudyType } from '$lib/types';

  export let data: { caseStudy: CaseStudyType };
</script>

<div class="text-white bg-black min-h-screen p-8">
  <CaseStudy caseStudy={data.caseStudy} />
</div>