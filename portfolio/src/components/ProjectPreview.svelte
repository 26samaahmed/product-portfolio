<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  export let project_duration = "[] Weeks";
  export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  export let imageUrl = placeholder;
  export let casestudyUrl = "/casestudies";
  export let tags = ["Tag1", "Tag2", "Tag3"];
</script>

<main>
  <div class="w-2/3 h-full border-2 shadow-lg mt-6 p-10 m-auto rounded-sm hover:scale-[1.02] duration-500">
    <div class="flex flex-col md:flex-row justify-between items-center mb-4">
      <h1 class="text-4xl mb-2">{title}</h1>
      <a href="/casestudies" target="_blank" 
            class="inline-block border px-3 py-1 bg-[#4696fd] text-lg text-white rounded-full 
                    hover:opacity-75 duration-500">
            Check Case Study
      </a>
    </div>
   <!-- <p class="text-xl mb-1">Duration: {project_duration}</p>-->


    <div class="flex flex-row space-x-4 items-center mb-4">
      {#each tags as tag}
        <p class="bg-[#eef066] text-lg text-black rounded-full px-3 py-1 text-center whitespace-nowrap">{tag}</p>
      {/each}
    </div>

    <div class="flex flex-col md:flex-row items-start pt-4">
      <p class="text-2xl mb-4"><em>Problem Statement:</em> {problem_statement}</p>
      <img src={imageUrl} alt="Project" 
           class="w-2/3 h-auto object-cover rounded-sm border border-white" />
    </div>
    
  </div>  
</main>
