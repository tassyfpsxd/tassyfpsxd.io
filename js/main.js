function devtoolIsOpening() {
    console.clear();
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 200) {
        document.write(" No Open Source ");
        window.location.replace("https://youtu.be/1fuuMfbeErM?si=IVFMSOZgJOy0uikr");
    }
    setTimeout(devtoolIsOpening, 100);
}
devtoolIsOpening();

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
    }
  });
  
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });