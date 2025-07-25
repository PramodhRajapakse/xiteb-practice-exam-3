
const newsItems = [
  {
    title: "Breaking: New Tech Announced",
    text: "A major announcement in the tech world has everyone talking.",
    date: "26 May",
    image: "src/assets/cargo-plane.jpg",
  },
  {
    title: "Economy Watch",
    text: "Experts share insights on the current economic trends.",
    date: "20 May",
    image: "src/assets/container-dockyard.jpg",
  },
  {
    title: "Health Breakthrough",
    text: "Scientists make strides in vaccine development.",
    date: "18 May",
    image: "src/assets/container-dockyard.jpg",
  },
  {
    title: "Global Politics",
    text: "World leaders meet to discuss climate change action.",
    date: "15 May",
    image: "src/assets/welcome-section-2.jpg",
  },
];

const News = () => {
  return (
    <div className="container my-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold text-uppercase">Latest News</h2>
        <p className="text-muted">Stay updated with the latest headlines and stories</p>
      </div>

      <div className="row g-4">
        {newsItems.map((item, idx) => {
          const [day, month] = item.date.split(" ");
          return (
            <div className="col-md-6" key={idx}>
              <div className="d-flex bg-light shadow-sm overflow-hidden" style={{ height: "160px" }}>

                <div className="position-relative" style={{ minWidth: "150px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid h-100"
                    style={{ objectFit: "cover", width: "150px", height: "100%" }}
                  />
                  <div
                    className="position-absolute top-0 start-0 bg-dark text-white text-center d-flex flex-column justify-content-center align-items-center"
                    style={{ width: "50px", height: "50px", fontSize: "0.75rem" }}
                  >
                    <div className="fw-bold" style={{ lineHeight: "1" }}>{day}</div>
                    <div style={{ fontSize: "0.65rem" }}>{month}</div>
                  </div>
                </div>

                <div className="p-3 flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
