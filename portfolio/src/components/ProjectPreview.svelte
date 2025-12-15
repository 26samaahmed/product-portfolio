<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  export let project_duration = "[] Weeks";
  export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  //export let casestudyUrl = "/casestudies";
  export let tags = ["Tag1", "Tag2", "Tag3"];
</script>

<main>
  <div class="w-2/3 mt-12 m-auto relative">

    <div class="bg-[#547E6F] text-[#F8F8F8] rounded-xl shadow-xl pt-10 pb-6 px-8 hover:scale-[1.03] transition-transform duration-300">
      
      <div class="flex justify-between mb-4 align-center">
      <p class="text-2xl">
        {title}
      </p>
      <p class="text-xl">
        {project_duration} ⟡ {role}
      </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="bg-white border border-[#105C42] text-[#105C42] px-4 py-1 rounded-full text-sm shadow-sm">
            {tag}
          </span>
        {/each}
      </div>

 
      <p class="text-xl mb-6 leading-relaxed">
        {problem_statement}
      </p>

    </div>
  </div>
</main>
