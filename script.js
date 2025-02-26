// ✅ gsap loaded? 
console.log( gsap );

document.addEventListener("DOMContentLoaded", function() {
   
    const paths = document.querySelectorAll("#graph-zig-zag, .graph-lines"); // Select all paths
  
  paths.forEach(path => {
         
    const pathLength = path.getTotalLength(); // Get length of each path
  
       // Set stroke-dasharray and stroke-dashoffset dynamically
         
       path.style.strokeDasharray = pathLength;      
       path.style.strokeDashoffset = pathLength;
     });
    
  // Animate all paths with a staggered effect
     
  gsap.to(paths, {
         
    strokeDashoffset: 0, 
    duration: 2,        
    delay : 1 ,
    stagger: .5 ,
    ease: "power2.out",             
     
  });
  });
  
  gsap.from(".arrow", {
      scaleY: 0,  // Scale from 0 to full height
      duration: 1,
      ease: "power2.out",
      delay: 1.5,
  });
  
  gsap.to(".numbers", {
      opacity: 0,       
      duration: .5,      
      stagger: {
          each: gsap.utils.random(0.2, 1.5, 0.1), 
          from: "random"  
      },
      repeat: -1,       
      yoyo: true,        
       ease: "power2.inOut"
   });
  
     // Select the SVG paths
    const lines = document.querySelectorAll(".list-lines");
    const svg = document.querySelector("svg");
  
    // Set initial state: Hide strokes by setting offset to full path length
    lines.forEach(line => {
      const length = line.getTotalLength(); // Get the total path length
      gsap.set(line, {
        strokeDasharray: length,  // Set dash length equal to path length
        strokeDashoffset: length  // Offset it completely to hide the line
      });
    });
  
    // Function to animate lines when hovering over the SVG
    function animateLines(show) {
      lines.forEach((line, index) => {
        const length = line.getTotalLength();
        gsap.to(line, {
          strokeDashoffset: show ? 0 : length, // Reveal or hide the stroke
          duration: .35,
          delay: index * 0.1,
          ease: "power2.out"
        });
      });
    }
  
    // Event Listeners for hover effects
    svg.addEventListener("mouseenter", () => animateLines(true));
    svg.addEventListener("mouseleave", () => animateLines(false));