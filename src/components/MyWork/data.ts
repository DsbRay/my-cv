// PROJECTS
import MonstersRolodexImage from '../../images/projects/monsters-rolodex-project.png'
import CrownClothingImage from '../../images/projects/crown-clothing-project.png'
import CvImage from '../../images/projects/my-cv.png'
import shareValueImage from '../../images/projects/shareValue.png'

// TOOL ICONS
import reactIcon from '../../images/icons/react.svg'
import cssIcon from '../../images/icons/css.svg'
import gatsbyIcon from '../../images/icons/gatsby.svg'
import styledIcon from '../../images/icons/styled-components.svg'
import typescriptIcon from '../../images/icons/typescript.svg'
// import angularIcon from '../../images/icons/angular-logo.svg'
import firebaseIcon from '../../images/icons/firebase.svg'
import gsap from '../../images/icons/gsap.svg'

export type ProjectProps = {
  title: string
  githubUrl: string
  siteUrl: string
  previewImg: string
  udemyUrl: string
  tools: []
}

export const MY_WORK_LIST = [
  {
    title: "My Site",
    githubUrl: "https://github.com/DsbRay/my-cv",
    siteUrl: "https://my-cv-ruby.vercel.app/",
    previewImg: CvImage,
    udemyUrl: "",
    tools: [
      reactIcon,
      gatsbyIcon,
      typescriptIcon,
      styledIcon,
    ]
  },
  {
    title: " Crown Clothing",
    githubUrl: "https://github.com/DsbRay/crown-clothing",
    siteUrl: "https://crown-clothing-xi.vercel.app/",
    previewImg: CrownClothingImage,
    udemyUrl: "",
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
    udemyUrl: "",
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
    udemyUrl: "",
    tools: [
      reactIcon,
      typescriptIcon,
      cssIcon,
      gsap,
    ]
  },
]