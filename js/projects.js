
  const projects = [
    {
      title: "Sheikh Hamid Road Project with Al Ayuni company",
      station: "ST-0+00 to 10+000",
      year: "September 2022",
      image: "assets/projects/1/1.jpg",
      link: "project-details-1.html"
    },
    {
      title: "Spine Earth Work with Al-Shalawi Company",
      station: "ST 56+200 to ST 58+200",
      year: "August 2023 - April 2024",
      image: "assets/projects/2/22.jpg",
      link: "project-details-2.html"
    },
    {
      title: "Spine project with Al-Suwailem company",
      station: "",
      year: "January 2023",
      image: "assets/projects/3/3.jpg",
      link: "project-details-3.html"
    },
    {
      title: "Land levelling project, Qayal area With Mobco company",
      station: "",
      year: "January 2023 - March 2023",
      image: "assets/projects/4/4.jpg",
      link: "project-details-4.html"
    },
    {
      title: "Expansion project of Al-Muwaileh airport road with Mobco company",
      station: "",
      year: "August 2022 - March 2023",
      image: "assets/projects/5/5.jpg",
      link: "project-details-5.html"
    },
    {
      title: "Spine Earth Work with Al Ayuni company",
      station: "St 56+200 to ST 58+200 ",
      year: "August 2022 -April 2024",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    },
    {
      title: " Al-Rain Road project , at 33 km with AlShalawi Company",
      station: "",
      year: "2020",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    },
    {
      title: "Spine Earth Work with Al Shalawi company",
      station: "ST 56+200 to ST 58+200",
      year: "August 2023 -April 2024",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    },
    {
      title: "TSSM Early Works and Service Projects with CHINA FIRST HIGHWAY ENGINEERING CO company",
      station: "3A Ski Slope & Early Works",
      year: "August 2024-Till Now",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    },
    {
      title: "WTS-water Transmission System -Oxagon-NEOM with Petrojet company",
      station: "",
      year: "November 2024-Till Now",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    },
    {
      title: "WTS-water Transmission System -Oxagon-NEOM The wastewater Network project in the Badr District of Riyadh by National Water Company with Al Ayuni company",
      station: "",
      year: "April 2023",
      image: "assets/logo-p-01.png",
      // link: "project-details-5.html"
    }
    
  ];

  const projectContainer = document.getElementById('project-container');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = "bg-white rounded-3xl shadow-lg overflow-hidden";

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" />
      <div class="p-4">
      <div>
        <h3 class="text-xl font-bold mb-4">${project.title}</h3>
        ${project.station ? `<p class="mb-1"><strong>Station:</strong> ${project.station}</p>` : ''}
        <p class="mb-2"><strong>Project Year:</strong> ${project.year}</p>
        </div>
        <div>
        ${project.link ? `<a href="${project.link}" class="inline-block px-4 py-2 bg-[#E2CE86] text-gray-800 rounded-xl hover:bg-[#C2A68A] transition duration-300">Read More</a>` : ''}
        </div>
      </div>
    `;

    projectContainer.appendChild(projectCard);
  });
