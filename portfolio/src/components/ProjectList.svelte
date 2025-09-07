<script>
  import ProjectPreview from '../components/ProjectPreview.svelte';
  
  let project1 = {
    title: "FullyBeyond",
    project_duration: "7 Months",
    role: "Web Lead, Co-Host",
    problem_statement: "Students interested in design had no dedicated platform to collaborate and showcase their skills in a hackathon-style environment."
};

</script>

<p class="text-5xl font-sans">Case Studies</p>
<ProjectPreview {...project1} />
<a href="/previous" class="text-2xl mt-6 inline-block relative">
  ← <span
    class="relative after:content-[''] after:absolute after:w-full after:h-0.5 
      after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
      after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#000000]
      hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    Previous Project
  </span>
</a>

<a href="/next" class="text-2xl mt-6 inline-block relative float-right">
  <span
    class="relative after:content-[''] after:absolute after:w-full after:h-0.5 
      after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
      after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#000000]
      hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    Next Project
  </span> →
</a>
