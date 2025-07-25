
const HeroSection = () => {
  return (
    <div className="position-relative d-flex" style={{ height: '100vh' }}>
      <div style={{width: "35%"}} className="bg-white"></div>

      <div style={{width: "65%"}}>
        <img
          src="src/assets/container-dockyard.jpg"
          alt="Container Dockyard"
          className="img-fluid"
          style={{
            width: "100%",
            height: "90%",
            objectFit: "cover",
          }} />
      </div>

      <div
        className="position-absolute top-50 start-0 translate-middle-y bg-white shadow p-4"
        style={{
          width: '40%',
          marginLeft: '5%',
          zIndex: 2,
        }}
      >
        <p className="text-uppercase small fw-bold text-warning mb-2">Logistic</p>
        <h1 className="display-5 fw-bold">
          Best Shipping <br />
          <span className="text-warning">Partner</span>
        </h1>
        <p className="text-muted my-3">
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis
          posuere maecenas. Molestie lobortis posuere maecenas. Eget sapien, gravida
          neque.
        </p>
        <button className="btn btn-warning text-white px-4 py-2 fw-bold">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
