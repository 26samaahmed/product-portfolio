<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  export let project_duration = "[] Weeks";
  export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  export let imageUrl = placeholder;
</script>

<main>
  <div class="w-2/3 h-full border-2 shadow-lg mt-6 p-10 m-auto rounded-sm hover:scale-[1.02] duration-500">

    <div class="flex flex-row justify-between items-center mb-4">
      <h1 class="text-5xl mb-2">{title}</h1>
      <div class=" h-10 border shadow-lg"></div>
      <p class="text-3xl mb-1"><em>Project Duration:</em> {project_duration}</p>
      <div class=" h-10 border shadow-lg"></div>
      <p class="text-3xl mb-1"><em>Role:</em> {role}</p>
    </div>

    <div class="flex flex-col md:flex-row items-start pt-4">
      
      <div class="flex flex-col md:w-1/3 text-left pr-6 justify-between h-full">
        <p class="text-2xl mb-4"><em>Problem Statement:</em> {problem_statement}</p>
        <a href="/casestudies" target="_blank" 
           class="text-2xl inline-block border p-3 rounded bg-white text-black 
                  hover:bg-black hover:text-white duration-500">
          Check Case Study
        </a>
      </div>
    
      
      <img src={imageUrl} alt="Project" 
           class="w-2/3 h-auto object-cover rounded-sm border border-white" />
    </div>
    
  </div>  
</main>
