import {useState} from "react";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="mt-4 p-3text-center">
      <div className="min-vh-25  bg-light p-2">
        <p className="fst-italic mb-1">"{items[index].text}"</p>
        <p className="fw-bold mt-2 mb-0">{items[index].name}</p>
      </div>

      <div className="d-flex justify-content-start mt-3">
        <div className="btn-group btn-group-sm" role="group" aria-label="Carousel navigation">
          <button
            onClick={prev}
            className="btn btn-outline-secondary rounded-0"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="btn btn-outline-secondary rounded-0"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;