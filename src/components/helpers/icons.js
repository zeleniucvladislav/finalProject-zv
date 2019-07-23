import {
  faPhone,
  faArrowAltCircleUp,
  faMapMarkedAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faPhone, faArrowAltCircleUp, faMapMarkedAlt, faEnvelope);
};

export default Icons;
