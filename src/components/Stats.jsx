const stats = [
  { label: "Delivered packages", value: 890 },
  { label: "Countries covered", value: 137 },
  { label: "Global Reach", value: 740 },
  { label: "Satisfied Clients", value: 600 },
];

const StatCard = ({ label, value }) => (
  <div className="d-flex flex-row align-items-center flex-fill p-4 m-2">
    <span className="fs-1 fw-bold text-dark me-2">{value}</span>
    <span className="fs-6 text-dark text-wrap" style={{ width: '6rem' }}>{label}</span>
  </div>
);

const Stats = () => (
  <div className="container my-4">
    <div className="row">
      {stats.map((stat) => (
        <div className="col-12 col-md-3 d-flex" key={stat.label}>
          <div className="position-relative w-100">
            <span
              className="position-absolute top-50 start-50 translate-middle display-1 fw-bold text-white opacity-25"
              style={{
                zIndex: -1,
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {stat.value}
            </span>
            <StatCard {...stat} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;