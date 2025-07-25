
const clientLogos = [
  'src/assets/intel.png',
  'src/assets/adidas.png',
  'src/assets/google-play.png',
  'src/assets/huawei.png',
  'src/assets/sony.png',
  'src/assets/uber.png'
];


const Clients = () => (
  <section
    className="d-flex justify-content-between align-items-center py-5"
    style={{ maxWidth: '900px', margin: '0 auto' }}
  >
    {clientLogos.map((logo, idx) => (
      <img
        key={idx}
        src={logo}
        alt={`Client logo ${idx + 1}`}
        className="mx-3"
        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
      />
    ))}
  </section>
);

export default Clients;