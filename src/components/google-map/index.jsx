import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div className="map-marker">
    <img
      src={`${process.env.PUBLIC_URL}/assets/img/icon-img/2.png`}
      alt={text}
    />
  </div>
);

const GoogleMap = ({ lat, lng, zoom }) => {
  const center = { lat, lng };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQsN0RL8W8BwVZhGrYEhT75hMeNXwSnhI" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  lat: 14.7429764,
  lng: 121.1332085155,
  zoom: 12,
};

export default GoogleMap;
