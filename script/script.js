const allCards = document.getElementById("all-cards");
const emptyState = document.getElementById("empty-state");
const availableJobs = document.getElementById("availableJob");
const totalJobs = document.getElementById("totalJobs");

const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const allJobsBtn = document.getElementById("all-jobs-btn");
const interviewJobsBtn = document.getElementById("interview-jobs-btn");
const rejectedJobsBtn = document.getElementById("rejected-jobs-btn");

let interviewNumber = 0;
let rejectedNumber = 0;

// total jobs find and add total

function allAvailableJobs() {
  const total = allCards.children.length;

  totalJobs.innerText = total;
  availableJobs.innerText = total;

  if (total === 0) {
    allCards.classList.add("hidden");
    emptyState.classList.remove("hidden");
  } else {
    allCards.classList.remove("hidden");
    emptyState.classList.add("hidden");
  }
}

allAvailableJobs();

// interview tab and full function

const interviewBtns = document.getElementsByClassName("interview-btn");

for (const btn of interviewBtns) {
  btn.addEventListener("click", function (event) {
    const card = event.target.parentNode.parentNode;
    const badge = card.querySelector("h6");
    const previousStatus = card.getAttribute("data-status");

    if (previousStatus === "interview") return;

    if (previousStatus === "rejected") {
      rejectedNumber--;
      rejectedCount.innerText = rejectedNumber;
    }

    badge.innerText = "Interview";
    badge.classList.remove("bg-base-200", "bg-red-200");
    badge.classList.add("bg-green-200");

    card.setAttribute("data-status", "interview");

    interviewNumber++;
    interviewCount.innerText = interviewNumber;
  });
}

// rejected tab and full function

const rejectedBtns = document.getElementsByClassName("rejected-btn");

for (const btn of rejectedBtns) {
  btn.addEventListener("click", function (event) {
    const card = event.target.parentNode.parentNode;
    const badge = card.querySelector("h6");
    const previousStatus = card.getAttribute("data-status");

    if (previousStatus === "rejected") return;

    if (previousStatus === "interview") {
      interviewNumber--;
      interviewCount.innerText = interviewNumber;
    }

    badge.innerText = "Rejected";
    badge.classList.remove("bg-base-200", "bg-green-200");
    badge.classList.add("bg-red-200");

    card.setAttribute("data-status", "rejected");

    rejectedNumber++;
    rejectedCount.innerText = rejectedNumber;
  });
}

// toggleing

function toggleStyle(id) {
  allJobsBtn.classList.remove("bg-blue-500");
  interviewJobsBtn.classList.remove("bg-blue-500");
  rejectedJobsBtn.classList.remove("bg-blue-500");

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("bg-blue-500");

  const cards = allCards.children;
  let visibleCount = 0;

  for (const card of cards) {
    if (id === "all-jobs-btn") {
      card.classList.remove("hidden");
      visibleCount++;
    } else if (id === "interview-jobs-btn") {
      if (card.getAttribute("data-status") === "interview") {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    } else if (id === "rejected-jobs-btn") {
      if (card.getAttribute("data-status") === "rejected") {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    }
  }

  if (visibleCount === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

// delete card

const deleteBtns = document.getElementsByClassName("delete-btn");

for (const deleteBtn of deleteBtns) {
  deleteBtn.addEventListener("click", function (event) {
    const card = event.target.parentNode.parentNode;
    const status = card.getAttribute("data-status");

    if (status === "interview") {
      interviewNumber--;
      interviewCount.innerText = interviewNumber;
    }

    if (status === "rejected") {
      rejectedNumber--;
      rejectedCount.innerText = rejectedNumber;
    }

    card.remove();
    allAvailableJobs();
  });
}
