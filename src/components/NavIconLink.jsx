import { useLocation } from 'react-router-dom';
import { FaQuestion, FaHome } from 'react-icons/fa';
import { AboutLinkBlock, AboutLink } from './styled/Common.styled';

function AboutIconLink() {
  const { pathname } = useLocation();
  const isAbout = ['/about', '/about/'].includes(pathname);

  return (
    <AboutLinkBlock>
      <AboutLink to={isAbout ? '/' : '/about'}>
        {isAbout ? <FaHome size={30} /> : <FaQuestion size={30} />}
      </AboutLink>
    </AboutLinkBlock>
  );
}

export default AboutIconLink;
