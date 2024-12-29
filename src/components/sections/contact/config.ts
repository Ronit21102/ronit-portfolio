import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'ronit21102@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/Ronit21102',
      Icon: SiGithub
    },
    {
      name: 'X',
      href: 'https://x.com/',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/ronit-roushan-460a9b194/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
