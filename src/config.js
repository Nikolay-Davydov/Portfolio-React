// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import MyBlog from "./images/myBlog.svg";
import CreditCard from "./images/credit-card.svg";
import Analytics from "./images/analytics.svg";


/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Nikolay-Davydov";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy exploring new technologies and learning. I have created this website to showcase my skills and experience using React. On this platform, you can learn more about my projects, view my resume, and even contact me if you have any questions or would like to collaborate.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="devicon:html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="devicon:css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="logos:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Puthon",
  },
  {
    id: 6,
    skill: <Icon icon="devicon-plain:django" className="display-4" />,
    name: "django",
  },
  {
    id: 7,
    skill: <Icon icon="logos:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 8,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1I9an98aO2hmmc1MztUVe895RxtsyL_1-/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["ahj-code-4.1-hw", "ahj-my_blog", "ahj-ECOMSELLER"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "ahj-code-4.1-hw",
    // image: Logo,
    image: CreditCard,
  },
  {
    name: "ahj-my_blog",
    image: MyBlog,
  },
  {
    name: "ahj-ECOMSELLER",
    image: Analytics,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mrbzeoyk";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
