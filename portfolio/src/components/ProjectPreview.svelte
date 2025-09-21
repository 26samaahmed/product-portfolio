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
    <div class="flex flex-col md:flex-row space-x-4 items-center mb-4">
      <h1 class="text-4xl">{title}</h1>
      {#each tags as tag}
      <p class="bg-[#eef066] text-lg text-black rounded-full px-3 py-1 text-center whitespace-nowrap">{tag}</p>
    {/each}
      
      <!--
      <p class="text-xl mb-1">Duration: {project_duration}</p>
    -->
    </div>


    <div class="flex flex-row space-x-4 items-center mb-4">
    </div>

    <p class="text-2xl mb-4"><em>Problem Statement:</em> {problem_statement}</p>
    <img src={imageUrl} alt="Project" 
         class="w-2/3 h-auto object-cover rounded-sm border border-white mb-5" />

    <div class="flex justify-end">
      <a href="/casestudies" target="_blank" 
          class="text-xl text-white relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:mt-1 hover:after:scale-x-100">
            Check Case Study
      </a>
    </div>        
    
  </div>  
</main>
