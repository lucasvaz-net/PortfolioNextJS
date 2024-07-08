import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faBookOpen, faBriefcase, faGlobe, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faArrowUp, faBookOpen, faBriefcase, faGlobe, faProjectDiagram, faStar, faGithub);
