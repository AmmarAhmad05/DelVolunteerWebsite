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
 }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();



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
        
        // Target the new container for the generated opportunity
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
        
        // Clear the container to prevent duplication if the function is called multiple times
        orgContainer.innerHTML = '';

        volunteeringData.opportunities.forEach(opportunity => {
            const pTag = document.createElement('p');

            // Wrap the image in an anchor tag that navigates to the opportunity link
            pTag.innerHTML = opportunity.imageUrl ? `<a href="${opportunity.link}" target="_blank"><img src="${opportunity.imageUrl}" alt="${opportunity.institution} Image" style="width:100px; height:auto;"></a><br>` : '';
            pTag.innerHTML += `<br> <a href="${opportunity.link}" target="_blank">${opportunity.institution}</a> `;

            orgContainer.appendChild(pTag);
        });
    }
    
}
displayOrganizations();


