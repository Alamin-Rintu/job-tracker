// total available jobs
const allCards = document.getElementById("all-cards");
const emptyState = document.getElementById("empty-state");

function allAvailableJobs() {
  totalJobs.innerText = allCards.children.length;
}
allAvailableJobs();

// btn- toggleStyle

const allJobsBtn = document.getElementById("all-jobs-btn");
const interviewJobsBtn = document.getElementById("interview-jobs-btn");
const rejectedJobsBtn = document.getElementById("rejected-jobs-btn");

function toggleStyle(id) {
  allJobsBtn.classList.remove("bg-blue-500");
  interviewJobsBtn.classList.remove("bg-blue-500");
  rejectedJobsBtn.classList.remove("bg-blue-500");

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("bg-blue-500");
  
  if (id === "all-jobs-btn") {
    allCards.classList.remove("hidden");
    emptyState.classList.add("hidden");
  } 
  else {
    allCards.classList.add("hidden");
    emptyState.classList.remove("hidden");
  }
}
