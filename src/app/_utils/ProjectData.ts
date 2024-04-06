
export interface Project {
    name : string,
    description : string
    images : Array<string>
    gitHubLink : string
    deployLink : string
}

export let projects : Array<Project> = [
 {
    name : "AnimeJourney",
    description : "Dive into the world of anime, and find your favorite ones to chart your anime journey. This project is made with Java, JavaScript, React, SpringBoot, PostgreSQL and more others to give you a unique experience, discovering the best and the newest anime, with a score and reviews from other people for you to enjoy the best contet ",
    images : ["/images/projects/animeJourney/create-profesional-full-stack-websites.jpg",
              "/images/projects/animeJourney/279370960-2354d096-831d-47f3-8641-d65b19f19b35.png"  ],
    gitHubLink : "https://github.com/IacobOliver/AnimeJourney",
    deployLink : "#"
 },
 {
    name : "BraduLaw",
    description : "This is a freelance project, a presentaion website for a lawyer client and the project repository is on another github accout, but you can see my activity on it.",
    images : ["/images/projects/braduLaw/0fe7d9b2-76ca-4374-b24c-b221073f84d7.jpg",
              "/images/projects/braduLaw/b0a57bab-9c1a-4838-9919-608d0737fc82.jpg"  ],
    gitHubLink : "https://github.com/CleanCodeRo/bradu-law",
    deployLink : "https://bradu-law-2988d.firebaseapp.com/"
 },
 {
    name : "RestaurantMania",
    description : "RestaurantMania is a web application made with Java,Spring, React, JavaScript and more. Designed to help users easily and quickly find their desired restaurants ,it provides a comprehensive list of restaurants with detailed information, including location, operating hours, menus, prices, product images, and ratings. Users can also publish their own restaurants and easily update their content.",
    images : ["/images/projects/restaurantMania/create-profesional-full-stack-websites.webp",
              "/images/projects/restaurantMania/img_3.png",
              "/images/projects/restaurantMania/img_4.png",
              "/images/projects/restaurantMania/img_5.png",
              "/images/projects/restaurantMania/img_6.png"  ],
    gitHubLink : "https://github.com/IacobOliver/RestaurantMania",
    deployLink : "#"
 },
 {
    name : "EmployeeMandness",
    description : "This is a solo project where I learned to use advanced MERN(Mongo, Express.js, React, Node.js) stack operations and routing. The project focuses on managing employee data for a company, allowing a wide variety of operations on its database",
    images : ["/images/projects/employeeMadness/image-1.png"],
    gitHubLink : "https://github.com/IacobOliver/PublicEmployeeMadness",
    deployLink : "#"
 }
]

