
export let startLink: string = "http://localhost:3000/"
// export let startLink : string = "http://localhost:3000/"

export interface Project {
   name: string,
   slug: string,
   description: string
   images: Array<string>
   skills: Array<string>
   gitHubLink: string
   deployLink: string
}

export let projects: Array<Project> = [
   {
      name: "Primăria Sector 2 București",
      slug: "primăria_sector_2_bucurești",
      description: "This project, funded by the European Union, aims to create a digital twin platform for Sector 2 of Bucharest. The platform will offer a detailed virtual map of the area, showing important features such as buildings, parks, churches, and other landmarks. One of the main goals is to monitor the environment in real time. The platform will track air quality and pollution levels, calculate CO₂ emissions, and generate future scenarios based on pollution trends. This will help city planners and residents make better decisions for a cleaner, healthier, and more sustainable Sector 2.",
      images: [
         "/images/projects/gis/gis5.jpg",
         "/images/projects/gis/gis2.jpg",
         "/images/projects/gis/gis3.jpg",
         "/images/projects/gis/gis4.jpg",
         "/images/projects/gis/gis1.jpg",
         "/images/projects/gis/gis6.jpg",
      ],
      skills: ["Java", " TypeScript",
         "React", "PostgreSql", "PostGis",
         "SpringBoot", "Node", "HTML ", "CSS",
         'Tailwind', "Docker", "Docker-Compose"],
      gitHubLink: "#",
      deployLink: "https://decarbonare.cleancodeit.com/"
   },
   {
      name: "Clean Code Academy",
      slug: "clean-code-academy",
      description: "A learning platform made for CleanCode company still in development, for the new people that enter it to learn and gather experience in the world of programming. Frontend is build with JavaScript and React framework, Tailwind for styling and deploy on CPanel, Java and SpringBoot for backend, SpringSecurity for user authentication and deploy on AWS EC2. One the home page are presented the learning modules and the implemented katas of the day, selected by the mentors. The modules consists of weeks who have lessons that redirect on the github project that needs to be done. The project it's pretty complex so if you want to know more about it, let's get in touch !",
      images: [
         "/images/projects/CleanCodeAcademy/cleancode3.jpg",
         "/images/projects/CleanCodeAcademy/cleancode1.jpg",
         "/images/projects/CleanCodeAcademy/cleancode2.jpg",
         "/images/projects/CleanCodeAcademy/cleancode4.jpg",
         "/images/projects/CleanCodeAcademy/cleancode5.jpg",
         "/images/projects/CleanCodeAcademy/cleancode6.jpg",
      ],
      skills: ["Java", " JavaScript",
         "React", "PostgreSql",
         "SpringBoot", "Node", "HTML ", "CSS",
         'Tailwind', "AWS"],
      // gitHubLink: "https://github.com/CleanCodeRo/ELearningPlatform_Frontend",
      gitHubLink: "#",
      deployLink: "https://quest.cleancode.ro/"
   },
   {
      name: "Magic Tattoo",
      slug: "magic-tattoo",
      description: "Magic Tattoo -  is a premier tattoo studio in Bucharest, showcasing a diverse catalog of tattoo styles, including neotraditional, portraits, and Polynesian. The website allows users to explore the gallery, meet the qualified artists, and book tattoos or consultations. It features an advanced configurator that calculates prices based on the tattoo's difficulty and selected options. Technologies used for this project include PHP, Laravel, JavaScript, CSS, and Tailwind. The site aims to inform and convince users to visit the salon for their next tattoo.      ",
      images: ["/images/projects/magicTattoo/magic1.png",
         "/images/projects/magicTattoo/magic6.png",
         "/images/projects/magicTattoo/magic2.png",
         "/images/projects/magicTattoo/magic3.png",
         "/images/projects/magicTattoo/magic4.png",
         "/images/projects/magicTattoo/magic5.png",
         "/images/projects/magicTattoo/magic7.png",
      ],
      skills: ["JavaScript", "Php",
         "Laravel", "Node", "MySQL"
         , "HTML", "CSS",
         'Tailwind'],
      gitHubLink: "#",
      deployLink: "https://magictattoo.ink/"
   },
   {
      name: "Inner Concept Studio",
      slug: "inner-concept-studio",
      description: "This presentation page was created to showcase the incredible talent and hard work of two exceptional designers. It serves as a platform to highlight their creativity, dedication, and the unique vision behind their projects.",
      images: ["/images/projects/innerConceptStudio/image1.jpg",
      "/images/projects/innerConceptStudio/image2.jpg",
      "/images/projects/innerConceptStudio/image3.jpg",
      "/images/projects/innerConceptStudio/image4.jpg",
      "/images/projects/innerConceptStudio/image5.jpg",],
      skills: ["TypeScript",
         "React", "Node", "ANTD" , "HTML ", "CSS",
         'Tailwind'],
      gitHubLink: "#",
      deployLink: "https://innerconceptstudio.cleancode.ro/"
   },
   {
      name: "Anime Journey",
      slug: "anime-journey",
      description: "Dive into the world of anime, and find your favorite ones to chart your anime journey. This project is made with Java, JavaScript, React, SpringBoot, PostgreSQL and more others to give you a unique experience, discovering the best and the newest anime, with a score and reviews from other people for you to enjoy the best content ",
      images: ["/images/projects/animeJourney/anime1.jpg",
         "/images/projects/animeJourney/anime2.png",
         "/images/projects/animeJourney/anime3.png",
         "/images/projects/animeJourney/anime4.png",
         "/images/projects/animeJourney/anime5.png"],
      skills: ["Java", " JavaScript",
         "React", "PostgreSql",
         "SpringBoot", "Node", "HTML ", "CSS",
         'Tailwind'],
      gitHubLink: "https://github.com/IacobOliver/AnimeJourney",
      deployLink: "#"
   },
   {
      name: "Magic Recruiting",
      slug: "magic-recruiting",
      description: "Landing page for MagicHub company with recruiting role, the project is developed in plain css and html, I recived it this way I developed it this way. The project consists of multiple pages fully responsive like the rest of my projects in my portofolio, and will soon be live. When a register request is made is sent to a telegram bot to our company!",
      images: ["/images/projects/MagicRecuiting/magic1.jpg",
         "/images/projects/MagicRecuiting/magic2.jpg",
         "/images/projects/MagicRecuiting/magic3.jpg",
         "/images/projects/MagicRecuiting/magic4.jpg",
         "/images/projects/MagicRecuiting/magic5.jpg",
         "/images/projects/MagicRecuiting/magic6.jpg",
         "/images/projects/MagicRecuiting/magic7.jpg",
      ],
      skills: [" JavaScript", "Node", "HTML ", "CSS",],
      gitHubLink: "#",
      deployLink: "https://academiamagic.ro/"
   },
   {
      name: "Bradu Law",
      slug: "bradu-law",
      description: "This is a freelance project, a presentaion website for a lawyer client and the project repository is on another github accout, but you can see my activity on it. The project was made with JavaScript and React framework, and for styling I used TailwindCss  . It consists of over 10 pages, containing data about the lawyer business",
      images: ["/images/projects/braduLaw/0fe7d9b2-76ca-4374-b24c-b221073f84d7.jpg",
         "/images/projects/braduLaw/b0a57bab-9c1a-4838-9919-608d0737fc82.jpg"],
      skills: [" JavaScript", "React", "Node", "HTML ", "CSS", 'Tailwind'],
      gitHubLink: "https://github.com/CleanCodeRo/bradu-law",
      deployLink: "https://bradu-law-2988d.firebaseapp.com/"
   },
   {
      name: "Restaurant Mania",
      slug: "restaurant-mania",
      description: "RestaurantMania is a web application made with Java,Spring, React, JavaScript and more. Designed to help users easily and quickly find their desired restaurants ,it provides a comprehensive list of restaurants with detailed information, including location, operating hours, menus, prices, product images, and ratings. Users can also publish their own restaurants and easily update their content.",
      images: ["/images/projects/restaurantMania/create-profesional-full-stack-websites.webp",
         "/images/projects/restaurantMania/img_3.png",
         "/images/projects/restaurantMania/img_4.png",
         "/images/projects/restaurantMania/img_5.png",
         "/images/projects/restaurantMania/img_6.png"],
      skills: ["Java", " JavaScript",
         "React", "PostgreSql",
         "SpringBoot", "Node", "HTML ", "CSS",
         'Tailwind'],
      gitHubLink: "https://github.com/IacobOliver/RestaurantMania",
      deployLink: "#"
   },
]

