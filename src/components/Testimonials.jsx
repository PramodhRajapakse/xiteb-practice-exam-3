import TestimonialCarousel from "./TestimonialCarousel";
import ExpandableList from "./ExpandableList";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Xiteb provided excellent service and support throughout our project.",
  },
  {
    name: "John Smith",
    text: "Professional team and timely delivery. Highly recommended!",
  },
  {
    name: "Alice Johnson",
    text: "Great experience working with Xiteb. Will hire again.",
  },
];

const expandableTexts = [
  {
    title: "Client Feedback 1",
    text: "Xiteb exceeded our expectations in every way. Their team was responsive and knowledgeable.",
  },
  {
    title: "Client Feedback 2",
    text: "The project was delivered ahead of schedule and met all our requirements.",
  },
  {
    title: "Client Feedback 3",
    text: "Communication was clear and consistent throughout the engagement.",
  },
];

const Testimonials = () => (
  <div className="container py-5 bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>
    <div className="row g-5 justify-content-center align-items-start">
      <div className="col-md-6">
        <h4 className="mb-2 text-uppercase medium">Trusted Clients</h4>
        <p className="text-muted mb-4 text-uppercase medium">
          Hear what our satisfied clients have to say about working with us.
        </p>
        <div className="medium">
          <TestimonialCarousel items={testimonials} />
        </div>
      </div>
      <div className="col-md-6">
        <h4 className="mb-2 text-uppercase medium">Why choose us</h4>
        <p className="text-muted mb-4 text-uppercase medium">
          Discover the reasons our clients continue to choose our services for their business needs.
        </p>
        <div className="medium">
          <ExpandableList items={expandableTexts} />
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;