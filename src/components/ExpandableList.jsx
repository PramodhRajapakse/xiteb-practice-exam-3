import { useState } from "react";

const ExpandableList = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="mt-4">
      {items.map((item, i) => (
        <div key={i} className="border-bottom border-top pb-2">
          <div
            className="d-flex justify-content-between align-items-center p-2"
            onClick={() => toggleItem(i)}
            style={{ cursor: "pointer" }}
          >
            <span>{item.title}</span>
            <button
              className={`btn btn-sm btn-dark d-flex align-items-center justify-content-center`}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(i);
              }}
              aria-label={openIndex === i ? "Collapse" : "Expand"}
              style={{ width: "30px", height: "30px" }}
            >
              {openIndex === i ? '\u2212' : '\u002B'}
            </button>
          </div>
          {openIndex === i && (
            <div className="p-3 bg-white mt-2 text-secondary">
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;
