// Tab navigation function
function langName(name, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(name).style.display = "block";
    elmnt.style.backgroundColor = color;

    // Reinitialize parallax after tab switch
    setTimeout(initParallax, 100);
}

// Initialize default tab
document.getElementById("defaultOpen").click();

// Parallax scrolling effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.welcome-message, .mission-statement, .why-statement, .conclusion, .home-page, .form-container, .contact-info');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;

        parallaxElements.forEach((element, index) => {
            if (element.offsetParent !== null) { // Check if element is visible
                let speed = 0.5;
                let yPos = -(scrollPosition * speed);
                element.style.transform = `translateY(${yPos * 0.1}px)`;
            }
        });
    });
}

// Mouse parallax effect for cards
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.welcome-message, .mission-statement, .why-statement, .home-page, .form-container');

    cards.forEach(card => {
        if (card.offsetParent !== null) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            } else {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            }
        }
    });
});

// Initialize parallax on page load
window.addEventListener('load', initParallax);



const volunteeringData = {
   "opportunities": [
      {
          "name": "Get Involved - Open Volunteer Form",
          "link": "https://www.zakat.org/get-involved/volunteer-form",
          "imageUrl": "https://muslimamericansociety.org/wp-content/uploads/2023/03/Zakat-Foundation-of-America-Logo.png",
          "institution": "Zakat Foundation",
          "dates": ["3/2/2024", "Present"]
      },
      {
          "name": "Volunteer Position - Advocacy Committee",
          "link": "https://www.barcprograms.org/volunteer/",
          "imageUrl": "https://www.barcprograms.org/wp-content/uploads/2022/10/logo.png",
          "institution": "BARC",
          "dates": ["03/15", "Present"]
      },
      {
          "name": "Food Bank",
          "link": "https://www.fbd.org/volunteer/",
          "imageUrl": "https://spurimpact.s3.amazonaws.com/degives_uploads/9744b8f3c76ad4277f94fa79be480e5b.png",
          "institution": "Food Bank of Delaware",
          "dates": ["03/3", "Present"]
      },
      {
          "name": "Tree Planting Day",
          "link": "https://agriculture.delaware.gov/forest-service/urban-and-community/volunteer/",
          "imageUrl": "https://bloximages.newyork1.vip.townnews.com/wrde.com/content/tncms/assets/v3/editorial/b/72/b72a8a64-2b28-11ee-acc6-57c221d03684/64c02f5a75fc7.image.png?resize=1396%2C931",
          "institution": "Delaware Department of Agriculture",
          "dates": ["Present"]
      }
  ]
};


function aggregateVolunteerInfo() {
    if (volunteeringData.opportunities.length > 0) {
        const randomIndex = Math.floor(Math.random() * volunteeringData.opportunities.length);
        const opportunity = volunteeringData.opportunities[randomIndex];
        
        const opportunityInfoContainer = document.getElementById('opportunity-info');
        
        opportunityInfoContainer.innerHTML = `<h1>${opportunity.institution}</h1>
                                               <img src="${opportunity.imageUrl}" alt="${opportunity.institution} Image" style="width:100px; height:auto;">
                                               <br>${opportunity.name}. <br>
                                               For more details: <a href="${opportunity.link}" target="_blank">Click Here</a>. <br>
                                               Dates: ${opportunity.dates.join(' until ')}`;
    } else {
        console.log("No opportunities found.");
    }
}

function displayOrganizations() {
    if (volunteeringData.opportunities.length > 0) {
        const orgContainer = document.querySelector('#Organizations');
        orgContainer.innerHTML = '';

        volunteeringData.opportunities.forEach(opportunity => {
            const pTag = document.createElement('p');
            pTag.innerHTML = opportunity.imageUrl ? `<a href="${opportunity.link}" target="_blank"><img src="${opportunity.imageUrl}" alt="${opportunity.institution} Image" style="width:100px; height:auto;"></a><br>` : '';
            pTag.innerHTML += `<br> <a href="${opportunity.link}" target="_blank">${opportunity.institution}</a> `;

            orgContainer.appendChild(pTag);
        });
    }
    
}
displayOrganizations();


