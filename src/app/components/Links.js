import { Linkedin, Github, Instagram, Twitter, Newspaper } from 'react-bootstrap-icons';

const username = "esalanguerra"
const http = "https://"

const links = [
  {
    name: "GitHub",
    title: "Perfil do Github",
    url: `${http}github.com/${username}`,
    icon: <Github size={24} />
  },
  {
    name: "LinkedIn",
    title: "Perfil do LinkedIn",
    url: `${http}linkedin.com/in/${username}`,
    icon: <Linkedin size={24} />
  },
  {
    name: "Instagram",
    title: "Perfil do Instagram",
    url: `${http}instagram.com/${username}`,
    icon: <Instagram size={24} />
  },
  {
    name: "Twitter",
    title: "Perfil do Twitter",
    url: `${http}twitter.com/${username}`,
    icon: <Twitter size={24} />
  },
  {
    name: "TabNews",
    title: "TabNews",
    url: `${http}tabnews.com.br/${username}`,
    icon: <Newspaper size={24} />
  }
]

export default links;
