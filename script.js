document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  let currentItems = 10;

  function addList(start, end) {
    for (let index = start; index < end; index++) {
      const element = document.createElement("li");
      element.textContent = `Item ${index + 1}`;
      infiList.appendChild(element);
    }
  }

  addList(0, currentItems);
  function isScrollBottom() {
    return (
      infiList.scrollHeight - infiList.clientHeight <= infiList.scrollTop + 1
    );
  }

  infiList.addEventListener("scroll", function () {
    if (isScrollBottom()) {
      currentItems += 2; 
      addList(currentItems - 2, currentItems);
    }
  });
});