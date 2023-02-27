// PROJECTS
import MonstersRolodexImage from '../../images/projects/monsters-rolodex-project.png'
import CrownClothingImage from '../../images/projects/crown-clothing-project.png'
import CvImage from '../../images/projects/my-cv-project.png'
import shareValueImage from '../../images/projects/shareValue-project.png'
import clipzImage from '../../images/projects/clipz-project.png'

// TOOL ICONS
import reactIcon from '../../images/tools/react.svg'
import cssIcon from '../../images/tools/css.svg'
import gatsbyIcon from '../../images/tools/gatsby.svg'
import styledIcon from '../../images/tools/styled-components.svg'
import typescriptIcon from '../../images/tools/typescript.svg'
import angularIcon from '../../images/tools/angular.svg'
import firebaseIcon from '../../images/tools/firebase.svg'
import gsap from '../../images/tools/gsap.svg'
// import javascriptIcon from "../../images/tools/javascript.svg"

export type ProjectProps = {
  title: string
  githubUrl: string
  siteUrl: string
  previewImg: string
  udemyCourse?: string | null
  udemyUrl?: string | null
  tools: []
}

export const MY_WORK_LIST = [
  {
    title: "My Site",
    githubUrl: "https://github.com/DsbRay/my-cv",
    siteUrl: "https://my-cv-ruby.vercel.app/",
    previewImg: CvImage,
    tools: [
      reactIcon,
      gatsbyIcon,
      typescriptIcon,
      styledIcon,
      gsap,
    ]
  },
  {
    title: " Crown Clothing",
    githubUrl: "https://github.com/DsbRay/crown-clothing",
    siteUrl: "https://crown-clothing-xi.vercel.app/",
    previewImg: CrownClothingImage,
    udemyCourse: "Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)",
    udemyUrl: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    tools: [
      reactIcon,
      typescriptIcon,
      styledIcon,
      firebaseIcon
    ]
  },
  {
    title: "Monsters Rolodex",
    githubUrl: "https://github.com/DsbRay/monsters-rolodex",
    siteUrl: "https://monsters-rolodex-nu-three.vercel.app/",
    previewImg: MonstersRolodexImage,
    udemyCourse: "Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)",
    udemyUrl: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    tools: [
      reactIcon,
      typescriptIcon,
      cssIcon,
    ]
  },
  {
    title: "ShareValue",
    githubUrl: "",
    siteUrl: "",
    previewImg: shareValueImage,
    tools: [
      reactIcon,
      typescriptIcon,
      cssIcon,
      gsap,
    ]
  },
  {
    title: "Clipz",
    githubUrl: "https://github.com/DsbRay/clipz",
    siteUrl: "https://clipz-delta.vercel.app/",
    previewImg: clipzImage,
    udemyCourse: "Complete Angular Developer in 2022: Zero to Mastery",
    udemyUrl: "https://www.udemy.com/course/complete-angular-developer-zero-to-mastery/",
    tools: [
      angularIcon,
      typescriptIcon,
      cssIcon,
      firebaseIcon,
    ]
  },
]
