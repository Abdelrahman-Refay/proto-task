const cardContainer = document.querySelector(".portfolio .portfolio-items");
console.log(cardContainer);

const projects = [
{
id: 1,
title: "Corporate Dashboard System",
description: "Pellentesque habitant morbi tristique senectus et netus.",
category: "Web design",
isFeatured: false,
date: "2024",
tags: ["Angular", "Python"],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-2.webp"
},
{
id: 2,
title: "Smart Finance Application",
description: "Maecenas tempus tellus eget condimentum rhoncus.",
category: "Mobile App",
isFeatured: true,
date: "2024",
tags: ["Swift", "Kotlin"],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-4.webp"
},
{
id: 3,
title: "Fashion Label Identity",
description: "Donec quam felis ultricies nec pellentesque pretium.",
category: "branding",
isFeatured: false,
date: "2023",
tags: ["Photoshop", "Illustrator",],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-6.webp"
},
];

projects.forEach(project => {
    cardContainer.innerHTML += `   <div class="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-1xl">
                <div class="relative">
                <img src="${project.image}" alt="project" class="w-full h-60 object-cover">
                <span class="absolute top-4 left-4 bg-white text-sky-500 px-4 py-2 rounded-full text-xs font-bold">${project.category}</span>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">${project.title}</h3>
                    <p class="text-gray-500 text-sm mb-5">${project.description}</p>
                    <div class="border-t border-gray-100 pt-4 flex items-center justify-between">
                        <div class="flex gap-2">
                         ${project.tags.map((tag) => ` <span class="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs">${tag}</span>`)}
                        </div>
                        <span class="text-gray-400 text-sm">${project.date}</span>
                    </div>
                </div>
            </div>`
})