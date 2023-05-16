import { Fragment} from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import PopupAd from "../../components/PopupAd";




const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate=" Home"
        description="Shop with us, get more value."
      />
     
      <LayoutOne headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="sales" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
        <PopupAd />
      </LayoutOne>
      
    </Fragment>
    
  );
};

export default Home;
