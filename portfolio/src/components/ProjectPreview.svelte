<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  export let project_duration = "[] Weeks";
  export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  export let imageUrl = placeholder;
</script>

<main>
  <div class="w-2/3 h-full border-2 shadow-lg mt-6 p-10  m-auto">

    <div class="flex flex-row justify-between items-center mb-4">
      <h1 class="text-5xl mb-2 text-[#d1d0d0]">{title}</h1>
      <div class=" h-10 border shadow-lg"></div>
      <p class="text-3xl mb-1 text-[#d1d0d0]"><em>Project Duration:</em> {project_duration}</p>
      <div class=" h-10 border shadow-lg"></div>
      <p class="text-3xl mb-1 text-[#d1d0d0]"><em>Role:</em> {role}</p>
    </div>

    <p class="text-2xl mb-4 text-[#d1d0d0]"><em>Problem Statement:</em> {problem_statement}</p>
    <img src={imageUrl} alt="Project" class="w-2/3 h-full object-cover" />
    <a href="/casestudies" target="_blank" class="text-2xl mt-4 inline-block relative 
    border p-3 rounded bg-white text-black hover:bg-black hover:text-white duration-500">Check Case Study</a>
  </div>
</main>
