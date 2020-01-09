const sectionOne = document.querySelector('.section1');
const sections   = document.querySelectorAll('section');
const options   = {
    root      : null,  // it is the viewport
    threshold : 0.27,
    rootMargin: "-150px"
};
const observer   = new IntersectionObserver(function(entries,observer){
      entries.forEach(entry=>{
          if(!entry.isIntersecting)
          {
            entry.target.classList.remove('section');
            return ;
          }
         console.log(entry);
         entry.target.classList.add('section');
         observer.unobserve(entry.target);
      });
},options);

sections.forEach(section=>{
f});
