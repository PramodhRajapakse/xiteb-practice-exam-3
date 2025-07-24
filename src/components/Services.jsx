import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  {
    img: 'src/assets/cargo-plane.jpg',
    title: 'Air Freight Services',
    text: 'At our company, we offer top-notch air freight services to ensure your cargo reaches its destination quickly and safely.',
  },
  {
    img: 'src/assets/cargo-container.jpg',
    title: 'Drone Services',
    text: 'Our ocean freight services provide a reliable and cost-effective solution for shipping large volumes of cargo internationally.',
  },
];

const Services = () => (
  <div className="container py-4">
    <div className="text-center text-success mb-2 fs-6">
      Real Solution, Real Fast!
    </div>
    <h2 className="text-center mb-4">Best Global Logistics Solutions.</h2>
    <div className="row justify-content-center">
      {cardData.map((card) => (
        <div className="col-md-5 mb-3" key={card.title}>
          <div className="card h-100 shadow-sm flex-row align-items-stretch p-0 rounded-0">
            <img
              src={card.img}
              alt={card.title}
              className="img-fluid"
              style={{
                width: 130,
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title mb-2">{card.title}</h5>
              <p className="card-text mb-0 text-muted">{card.text}</p>
              <div className="mt-2 d-flex align-items-center">
                <button
                  className="btn btn-dark rounded-circle me-2"
                  style={{
                    border: 'none',
                  }}
                >
                  <span>&#8594;</span>
                </button>
                <span>Read More</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
