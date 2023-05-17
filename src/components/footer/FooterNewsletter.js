import PropTypes from "prop-types";
import clsx from "clsx";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass
}) => {
  return (
    <div className={clsx("footer-widget", spaceBottomClass, sideMenu ? "ml-ntv5" : spaceLeftClass, widgetColorClass)}>
      <div className="footer-title">
       <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6877769158345!2d121.13563731543258!3d14.73023597783421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb18144bf653%3A0x34e13592dd4050d0!2sRodriguez%20Hwy%2C%20Rodriguez%2C%20Rizal!5e0!3m2!1sen!2sph!4v1679020338140!5m2!1sen!2sph"
           width="600"
           height="200" 
           className="border-0 w-100" 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
           </iframe>
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string
};

export default FooterNewsletter;
