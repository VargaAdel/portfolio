var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const waveEmoji = document.getElementById('wave');

  // You can use JavaScript to start/stop the wave animation if needed
  // For example, this could be used to trigger the animation after a delay:

  setTimeout(() => {
    waveEmoji.style.animationPlayState = 'running';
  }, 500);  // Delay the start of the animation by 500ms
});