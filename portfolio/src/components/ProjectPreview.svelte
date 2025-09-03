<script>
import placeholder from '$lib/assets/project1.png';

  export let title = "Project Title";
  export let project_duration = "[] Weeks";
  export let role = "Example Role";
  export let problem_statement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  export let imageUrl = placeholder;
</script>

<div class="w-fit h-full border-2 shadow-lg mt-6 p-10 hover:scale-102 transition-transform duration-300 hover:shadow-4xl m-auto">

  <div class="flex flex-row justify-between items-center mb-4">
    <h1 class="text-5xl mb-2">{title}</h1>
    <div class=" h-10 border shadow-lg"></div>
    <p class="text-3xl mb-1"><em>Project Duration:</em> {project_duration}</p>
    <div class=" h-10 border shadow-lg"></div>
    <p class="text-3xl mb-1"><em>Role:</em> {role}</p>
  </div>

  <p class="text-2xl mb-4"><em>Problem Statement:</em> {problem_statement}</p>
  <img src={imageUrl} alt="Project Image" class="w-2/3 h-full object-cover" />
  <p> <span class="text-2xl mt-4 inline-block relative 
  after:content-[''] after:absolute after:w-full after:h-0.5 
  after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
  after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#000000]
  hover:after:scale-x-100 hover:after:origin-bottom-left">Check Case Study </span> → </p>
</div>
