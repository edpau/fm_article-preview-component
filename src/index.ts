const shareButton = document.querySelector<HTMLButtonElement>(
  ".card__share-button"
);
const shareNav = document.querySelector<HTMLElement>(".card__share-nav");
const shareButtonIcon = document.querySelector<HTMLElement>(
  ".card__share-icon-path"
);
const authorSection = document.querySelector<HTMLElement>(".card__author");


// Function to determine if mobile layout is active
function isMobileView() {
  return window.matchMedia('(max-width: 740px)').matches;
}

// Ensure both elements exist before adding event listener
if (shareButton && shareNav && shareButtonIcon && authorSection) {
  // Use more descriptive variable names for state management
  shareButton.addEventListener("click", () => {
    const currentState = shareNav.dataset.state ?? "collapsed";
    const nextState = currentState === "collapsed" ? "expanded" : "collapsed";
    const isExpanded = nextState === "expanded";

    // Update the data-state attribute
    shareNav.dataset.state = nextState;
    shareButton.dataset.state = nextState;
    shareButtonIcon.dataset.state = nextState;
    shareButton.setAttribute("aria-expanded", String(isExpanded));
    shareNav.setAttribute("aria-hidden", String(!isExpanded));

    if (isMobileView() && isExpanded) {
      authorSection.style.visibility = "hidden";
      shareButton.style.visibility = "visible";
    } else {
      authorSection.style.visibility = "visible";
    }

  });
} else {
  console.error("One or more required elements (share button, navigation, icon, author section) not found.");
}
