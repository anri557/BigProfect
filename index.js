
//closing the menu window and oppening
const closeWind=document.getElementById('close-window')
const menu=document.getElementById('menu')
const hamburger=document.querySelector('.hamburger')

hamburger.addEventListener('click',()=>{
  menu.style.display='flex'
})
closeWind.addEventListener('click',()=>{
  menu.style.display='none'

})
const PopUp1=document.getElementById('pop1')
const PopTrigger1= document.querySelector('a[data-short="Who We Are"]')

PopTrigger1.addEventListener('mouseenter',()=>{
  PopUp1.classList.add('active')
})
PopTrigger1.addEventListener('mouseleave',()=>{
  PopUp1.classList.remove('active')
})
//pop2
const PopUp2=document.getElementById('pop2')
const PopTrigger2= document.querySelector('a[data-short="Careers"]')

PopTrigger2.addEventListener('mouseenter',()=>{
  PopUp2.classList.add('active')
})
PopTrigger2.addEventListener('mouseleave',()=>{
  PopUp2.classList.remove('active')
})


//pop3



function setupPopups() {
  const width = window.innerWidth;
  const trigger = document.querySelector('a[data-short="More"]');

  // Cleanup previous listeners
  trigger.replaceWith(trigger.cloneNode(true));
  const newTrigger = document.querySelector('a[data-short="More"]');

  if (width >= 1000) {
    const pop = document.getElementById('pop3');
    
    newTrigger.addEventListener('mouseenter', () => {
      pop.classList.add('active');
    });
    newTrigger.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });

    pop.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });

  } else {
    const pop = document.getElementById('pop4');

    newTrigger.addEventListener('mouseenter', () => {
      pop.classList.add('active');
      
    });
    newTrigger.addEventListener('mouseleave', () => {
      pop.classList.remove('active');

    });

    pop.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });
  }
}

// Run once at page load
setupPopups();

// Re-run when window changes size
window.addEventListener('resize', setupPopups);

function setupPopups2() {
  const width = window.innerWidth;
  const trigger = document.querySelector('.More');

  // Cleanup previous listeners
  trigger.replaceWith(trigger.cloneNode(true));
  const newTrigger = document.querySelector('.More');

  if (width >= 1000) {
    const pop = document.getElementById('pop5');
    
    newTrigger.addEventListener('mouseenter', () => {
      pop.classList.add('active');
    });
    newTrigger.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });

    pop.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });

  } else {
    const pop = document.getElementById('pop6');

    newTrigger.addEventListener('mouseenter', () => {
      pop.classList.add('active');
    });
    newTrigger.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });

    pop.addEventListener('mouseleave', () => {
      pop.classList.remove('active');
    });
  }
}

setupPopups2();
window.addEventListener('resize', setupPopups2);

const ourExpertise = document.querySelector('a[data-short="Our Expertise"]');
const bigPop = document.querySelector('.bigPop');

if (ourExpertise && bigPop) {
  // show on mouseenter of the link
  ourExpertise.addEventListener('mouseenter', () => {
    bigPop.classList.add('active');
     bigPop.style.display='flex'
  });

  // keep visible when mouse moves from link into popup
  // remove only after user leaves both link and popup
  const removeIfNotHovering = () => {
    if (!ourExpertise.matches(':hover') && !bigPop.matches(':hover')) {
      bigPop.classList.remove('active');
    }
  };

  ourExpertise.addEventListener('mouseleave', () => {
    // small delay not required but prevents flicker in some layouts
    setTimeout(removeIfNotHovering, 500);
  });

  bigPop.addEventListener('mouseenter', () => {
    bigPop.classList.add('active');
    bigPop.style.display='flex'
  });

  bigPop.addEventListener('mouseleave', () => {
    setTimeout(removeIfNotHovering, 200);
  });
} else {
  console.warn('Missing selector: ourExpertise or .bigPop not found in DOM');
}


//our expertise pop up
/// --- Element Selectors ---
const trigger1 = document.querySelector('.trigger1');
const trigger2 = document.querySelector('.trigger2');
const options1 = document.querySelector('.options1');
const options2 = document.querySelector('.options2');

// Find the <li> elements that contain the triggers to manage the hover area
// This makes the menu stay open when you hover over the text/link within the li.
const liTrigger1 = document.querySelector('.trigger1');
const liTrigger2 = document.querySelector('.trigger2');

// --- 1. Function to Revert to Default State (options1 ON, options2 OFF) ---
const revertToDefault = () => {
  // Default State: options1 is visible, options2 is hidden
  
  // SHOW options1 (remove the class we used to hide it)
  options1.classList.remove('hide-menu'); 
  
  // HIDE options2 (make sure it's the default hidden state)
  options2.classList.remove('show-menu'); 
};

// --- 2. Trigger 1 Hover: SHOW options1, HIDE options2 ---
liTrigger1.addEventListener('mouseenter', () => {
  // SHOW options1
  options1.classList.remove('hide-menu');
  
  // HIDE options2
  options2.classList.remove('show-menu'); 
});


liTrigger2.addEventListener('mouseenter', () => {
  
  options1.classList.add('hide-menu');
  
  
  options2.classList.add('show-menu'); 
});

const parentWrapper = document.querySelector('.two').parentNode;  

parentWrapper.addEventListener('mouseleave', revertToDefault);


liTrigger1.addEventListener('mouseleave', () => {
   
});


const trigger3 = document.querySelector('.trigger3');
const trigger4 = document.querySelector('.trigger4');
const trigger5 = document.querySelector('.trigger5');
const trigger6 = document.querySelector('.trigger6');

const options3 = document.querySelector('.options3');
const options4 = document.querySelector('.options4');
const options5 = document.querySelector('.options5');
const options6 = document.querySelector('.options6');


const allOptions = [options3, options4, options5, options6];

const showOnly = (activeOption) => {
    allOptions.forEach(option => {
        if (option === activeOption) {
            
            option.classList.remove('hide-menu'); 
            option.classList.add('show-menu');    
        } else {

            option.classList.add('hide-menu');
            option.classList.remove('show-menu');
        }
    });
};


// --- Revert to Default State (options3 visible, others hidden) ---
const revertToDefault2 = () => {
  // SHOW options3
  options3.classList.remove('hide-menu');
  options3.classList.add('show-menu'); 
  
  // HIDE all others
  options4.classList.remove('show-menu'); // Remove show-menu, relies on default CSS 'display: none'
  options5.classList.remove('show-menu'); 
  options6.classList.remove('show-menu'); 
};

// --- Event Listeners for Hover ---

// Trigger 3 Hover: SHOW options3
trigger3.addEventListener('mouseenter', () => {
    showOnly(options3);
});

// Trigger 4 Hover: SHOW options4, HIDE others
trigger4.addEventListener('mouseenter', () => {
    showOnly(options4);
});

// Trigger 5 Hover: SHOW options5, HIDE others
trigger5.addEventListener('mouseenter', () => {
    showOnly(options5);
});

// Trigger 6 Hover: SHOW options6, HIDE others
trigger6.addEventListener('mouseenter', () => {
    showOnly(options6);
});

const parentWrapper2 = document.querySelector('.three').parentNode; 

parentWrapper2.addEventListener("mouseleave", revertToDefault2);


const trigger7=document.querySelector('.trigger7')
const trigger8=document.querySelector('.trigger8')
const trigger9=document.querySelector('.trigger9')
const trigger10=document.querySelector('.trigger10')
const trigger11=document.querySelector('.trigger11')
const trigger12=document.querySelector('.trigger12')
const trigger13=document.querySelector('.trigger13')
const trigger14=document.querySelector('.trigger14')
const trigger15=document.querySelector('.trigger15')

//options
const options7=document.querySelector('.options7')
const options8=document.querySelector('.options8')
const options9=document.querySelector('.options9')
const options10=document.querySelector('.options10')
const options11=document.querySelector('.options11')
const options12=document.querySelector('.options12')
const options13=document.querySelector('.options13')
const options14=document.querySelector('.options14')
const options15=document.querySelector('.options15')

const allOptions2=[options7,options8,options9,options10,options11,options12,options13,options14,options15]

const four = document.querySelector('.four');
const group2 = document.querySelector('.group2'); // new

const showOnly2 = (activeOption) => {
  // Show group2, hide group1
  four.classList.add('hide-menu');
  group2.classList.remove('hide-menu');

  allOptions2.forEach(option => {
    option.classList.toggle('show-menu', option === activeOption);
    option.classList.toggle('hide-menu', option !== activeOption);
  });
};

const revertToDefault3 = () => {
  // Show first option in group2
  group2.classList.remove('hide-menu');
  four.classList.add('hide-menu');

  options7.classList.add('show-menu');
  options7.classList.remove('hide-menu');

  // hide others
  allOptions2.forEach(option => {
    if(option !== options7){
        option.classList.remove('show-menu');
        option.classList.add('hide-menu');
    }
  });
};

// Show group1 again when hovering triggers3–6:
trigger3.addEventListener('mouseenter', () => {
  four.classList.remove('hide-menu'); // show group1
  group2.classList.add('hide-menu');  // hide group2
  showOnly(options3);
});
trigger4.addEventListener('mouseenter', () => {
  four.classList.remove('hide-menu');
  group2.classList.add('hide-menu');
  showOnly(options4);
});
trigger5.addEventListener('mouseenter', () => {
  four.classList.remove('hide-menu');
  group2.classList.add('hide-menu');
  showOnly(options5);
});
trigger6.addEventListener('mouseenter', () => {
  four.classList.remove('hide-menu');
  group2.classList.add('hide-menu');
  showOnly(options6);
});



trigger7.addEventListener('mouseenter', () => {
    showOnly2(options7);
});
trigger8.addEventListener('mouseenter', () => {
    showOnly2(options8);
});

trigger9.addEventListener('mouseenter', () => {
    showOnly2(options9);
});


trigger10.addEventListener('mouseenter', () => {
    showOnly2(options10);
});
trigger11.addEventListener('mouseenter', () => {
    showOnly2(options11);
});
trigger12.addEventListener('mouseenter', () => {
    showOnly2(options12);
});
trigger13.addEventListener('mouseenter', () => {
    showOnly2(options13);
});
trigger14.addEventListener('mouseenter', () => {
    showOnly2(options14);
});
trigger15.addEventListener('mouseenter', () => {
    showOnly2(options15);
});

const parentWrapper3 = document.querySelector('.four').parentNode; 

parentWrapper3.addEventListener("mouseleave", revertToDefault3);



const triggers = document.querySelectorAll(".mobile-trigger");

triggers.forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    const subMenu = trigger.nextElementSibling;
    const isCurrentlyOpen = subMenu.classList.contains("open");


    triggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        otherTrigger.classList.remove("active");
        otherTrigger.nextElementSibling.classList.remove("open");
      }
    });


    if (!isCurrentlyOpen) {
      trigger.classList.add("active");
      subMenu.classList.add("open");
    } else {
      trigger.classList.remove("active");
      subMenu.classList.remove("open");
    }
  });
});


const triggersLevel2 = document.querySelectorAll(".mobile-trigger-level2");

triggersLevel2.forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); 

    const subMenu = trigger.nextElementSibling;
    const isCurrentlyOpen = subMenu.classList.contains("open");


    const parentMenu = trigger.closest('.sub-menu');
    const siblingTriggers = parentMenu.querySelectorAll('.mobile-trigger-level2');
    
    siblingTriggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        otherTrigger.classList.remove("active");
        otherTrigger.nextElementSibling.classList.remove("open");
      }
    });


    if (!isCurrentlyOpen) {
      trigger.classList.add("active");
      subMenu.classList.add("open");
    } else {
      trigger.classList.remove("active");
      subMenu.classList.remove("open");
    }
  });
});


const triggersLevel3 = document.querySelectorAll(".mobile-trigger-level3");

triggersLevel3.forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); 

    const subMenu = trigger.nextElementSibling;
    const isCurrentlyOpen = subMenu.classList.contains("open");


    const parentMenu = trigger.closest('.sub-menu-level2');
    const siblingTriggers = parentMenu.querySelectorAll('.mobile-trigger-level3');
    
    siblingTriggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        otherTrigger.classList.remove("active");
        otherTrigger.nextElementSibling.classList.remove("open");
      }
    });


    if (!isCurrentlyOpen) {
      trigger.classList.add("active");
      subMenu.classList.add("open");
    } else {
      trigger.classList.remove("active");
      subMenu.classList.remove("open");
    }
  });
});
const wrappers=document.querySelectorAll('.image-wrapper')
const dots=document.querySelectorAll('.dot')
let index=0
function update(){
  wrappers.forEach((w,i)=>{
    w.classList.toggle('active', i ===index)

  })
  dots.forEach((dot,i)=>{
dot.classList.toggle('active',i===index)
  })
}

  document.getElementById("next").addEventListener('click',()=>{
    index=(index+1)%wrappers.length
    update()
  })


document.getElementById("prev").addEventListener('click',()=>{
  index=(index-1+wrappers.length)%wrappers.length
  update()
})
setInterval(() => {
  index=(index+1)%wrappers.length
  update()
}, 5000);
dots.forEach((dot,i)=>{
  dot.addEventListener('click',()=>{
    index=i
    update()
  })
})
update()
//featured box

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(i) {
  slides.forEach((s, index) => {
    s.classList.toggle("active", index === i);
  });
}

document.querySelector(".next-arrow").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.querySelector(".back-arrow").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// initialize
showSlide(current);


const data = [
  {
    img: "./section images/energy-chemicals-banner.webp",
    title: "Delivering integrated, technology-driven energy <br> services to meet evolving market requirements",
    btn: "Explore energy+chemicals",
    links:'/BigProfect/energy+chemicals/energy+chemicals.html'
  },
  {
    img: "./section images/1340413200.avif",
    title: "Modernizing power systems for future <br>resilience, reliability, and security",
    btn: "Explore Power+utilities",
    links:'/BigProfect/construction project1/Power+Utility/powerUtility.html'
  },
  {
    img: "./section images/Energy-transitions.jpg",
    title: "Moving toward a net-zero future for <br>sustainable profitability",
    btn: "Explore energy transition",
    links:'/BigProfect/construction project1/energy transition/energytrans.html'
  },
  {
    img: "./section images/manufacturing.jpg (1).webp",
    title: "Focusing on safety and quality to deliver <br> long-lasting project solutions",
    btn: "Explore manufacturing+infrastructure",
    links:'/BigProfect/construction project1/Manufacturing + Infrastructure/Manufacturing + Infrastructure.html'
  }
];

const img = document.getElementById("industry-img");
const title = document.getElementById("industry-title");
const btn = document.getElementById("industry-btn");
const links=document.querySelector('.indistury-links')
const lines=document.querySelectorAll('.line')

document.querySelectorAll(".box2").forEach(box => {
  box.addEventListener("click", () => {
    const i = box.getAttribute("data-index");
    lines.forEach(line => line.classList.remove('active'));
    lines[i].classList.add('active');


    img.src = data[i].img;
    title.innerHTML = data[i].title;
    btn.textContent = data[i].btn;
    links.href=data[i].links
  });
});


 