<script lang="ts">
  import type {CaseStudy} from '$lib/types';

  export let caseStudy: CaseStudy;
</script>

<main>
  <p class="text-lg text-[#eef066] ml-0 mb-2 font-heading">Timeline: {caseStudy.timeline}</p>
  <h1 class="text-4xl mb-4 font-sans">{caseStudy.title}</h1>
  <!--
  <p>{caseStudy.roles.join(', ')}</p>
  <p>{caseStudy.introduction}</p>
  <p>{caseStudy.problem_statement}</p>
  -->
</main>


