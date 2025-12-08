<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  //export let project_duration = "[] Weeks";
  //export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  export let imageUrl = placeholder;
  //export let casestudyUrl = "/casestudies";
  export let tags = ["Tag1", "Tag2", "Tag3"];
</script>

<main>
  <div class="w-2/3 mt-12 m-auto relative">


    <div class="absolute -top-5 left-8 bg-[#105C42] text-white px-5 py-2 rounded-t-xl shadow-md z-10 text-lg font-semibold">
      {title}
    </div>


    <div class="bg-[#EAFAE3] border border-[#105C42] rounded-2xl shadow-xl pt-10 pb-6 px-8 hover:scale-[1.03] transition-transform duration-300">
      

      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="bg-white border border-[#105C42] text-[#105C42] px-4 py-1 rounded-full text-sm shadow-sm">
            {tag}
          </span>
        {/each}
      </div>

 
      <p class="text-2xl mb-6 leading-relaxed">
        Problem Statement: {problem_statement}
      </p>


      <img src={imageUrl} alt="Project" 
           class="w-full h-auto object-cover rounded-xl border border-white shadow-md" />

    </div>
  </div>
</main>
