
export let startLink : string = "http://localhost:3000/"
// export let startLink : string = "http://localhost:3000/"

export interface Project {
   name: string,
   slug:string,
   description: string
   images: Array<string>
   gitHubLink: string
   deployLink: string
}

export let projects: Array<Project> = [
   {
      name: "Clean Code Academy",
      slug: "clean-code-academy",
      description: "A learning platform made for CleanCode company still in development, for the new people that enter it to learn and gather experience in the world of programming. Frontend is build with JavaScript and React framework, Tailwind for styling and deploy on CPanel, Java and SpringBoot for backend, SpringSecurity for user authentication and deploy on AWS EC2. One the home page are presented the learning modules and the implemented katas of the day, selected by the mentors. The modules consists of weeks who have lessons that redirect on the github project that needs to be done. The project it's pretty complex so if you want to know more about it, let's get in touch !",
      images: ["/images/projects/CleanCodeAcademy/cleancode1.jpg",
         "/images/projects/CleanCodeAcademy/cleancode2.jpg",
         "/images/projects/CleanCodeAcademy/cleancode3.jpg",
         "/images/projects/CleanCodeAcademy/cleancode4.jpg",
         "/images/projects/CleanCodeAcademy/cleancode5.jpg",
         "/images/projects/CleanCodeAcademy/cleancode6.jpg",
      ],
      gitHubLink: "https://github.com/CleanCodeRo/ELearningPlatform_Frontend",
      deployLink: "https://quest.cleancode.ro/"
   },
   {
      name: "Anime Journey",
      slug: "anime-journey",
      description: "Dive into the world of anime, and find your favorite ones to chart your anime journey. This project is made with Java, JavaScript, React, SpringBoot, PostgreSQL and more others to give you a unique experience, discovering the best and the newest anime, with a score and reviews from other people for you to enjoy the best content ",
      images: ["/images/projects/animeJourney/create-profesional-full-stack-websites.jpg",
         "/images/projects/animeJourney/279370960-2354d096-831d-47f3-8641-d65b19f19b35.png"],
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
      gitHubLink: "https://github.com/IacobOliver/magic-2",
      deployLink: "#"
   },
   {
      name:"Bradu Law",
      slug:"bradu-law",
      description: "This is a freelance project, a presentaion website for a lawyer client and the project repository is on another github accout, but you can see my activity on it. The project was made with JavaScript and React framework, and for styling I used TailwindCss  . It consists of over 10 pages, containing data about the lawyer business",
      images: ["/images/projects/braduLaw/0fe7d9b2-76ca-4374-b24c-b221073f84d7.jpg",
         "/images/projects/braduLaw/b0a57bab-9c1a-4838-9919-608d0737fc82.jpg"],
      gitHubLink: "https://github.com/CleanCodeRo/bradu-law",
      deployLink: "https://bradu-law-2988d.firebaseapp.com/"
   },
   {
      name:"Restaurant Mania",
      slug:"restaurant-mania",
      description: "RestaurantMania is a web application made with Java,Spring, React, JavaScript and more. Designed to help users easily and quickly find their desired restaurants ,it provides a comprehensive list of restaurants with detailed information, including location, operating hours, menus, prices, product images, and ratings. Users can also publish their own restaurants and easily update their content.",
      images: ["/images/projects/restaurantMania/create-profesional-full-stack-websites.webp",
         "/images/projects/restaurantMania/img_3.png",
         "/images/projects/restaurantMania/img_4.png",
         "/images/projects/restaurantMania/img_5.png",
         "/images/projects/restaurantMania/img_6.png"],
      gitHubLink: "https://github.com/IacobOliver/RestaurantMania",
      deployLink: "#"
   },
   {
      name:"Employee Mandness",
      slug:"employee-mandness",
      description: "This is a solo project where I learned to use advanced MERN(Mongo, Express.js, React, Node.js) stack operations and routing. The project focuses on managing employee data for a company, allowing a wide variety of operations on its database",
      images: ["/images/projects/employeeMadness/image-1.png"],
      gitHubLink: "https://github.com/IacobOliver/PublicEmployeeMadness",
      deployLink: "#"
   }
]

