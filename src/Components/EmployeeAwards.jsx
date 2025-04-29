
import PropTypes from 'prop-types';

// Single EmployeeAward component with Font Awesome icon and Tailwind CSS classes
const EmployeeAward = ({ title, description, iconClass }) => {
  return (
    <div
      className="flex flex-col items-center px-4 pt-8 pb-6 rounded-tr-full rounded-tl-full shadow-lg m-2
       hover:scale-110 hover:before:rounded-tr-full hover:before:rounded-t-full transition-transform duration-300 
       testominal bg-gradient-to-br from-sky-500 to-purple-600 mb-8"
    >
      <i className={`${iconClass} fa-3x text-white text-6xl mb-4`}></i>{" "}
      {/* Font Awesome icon */}
      <h3 className="text-xl font-bold font-Poppins text-white  whitespace-nowrap mb-2">
        {title}
      </h3>
      <p className="text-white font-Poppins text-sm font-medium text-center">
        {description}
      </p>
    </div>
  );
};

// Add PropTypes validation
EmployeeAward.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};

// EmployeeAwards component that renders EmployeeAward components in a grid
const EmployeeAwards = () => {
  const awards = [
    {
      title: "Company Values Award",
      description:
        "Recognizing employees who exemplify our core values in their work.",
      iconClass: "fas fa-handshake",
    },
    {
      title: "Innovation Leader",
      description:
        "Awarded to those who bring creative solutions and drive progress.",
      iconClass: "fas fa-lightbulb",
    },
    {
      title: "Customer Service Star",
      description:
        "Honoring team members with exceptional customer service skills.",
      iconClass: "fas fa-headset",
    },
    {
      title: "Team Player Award",
      description:
        "For individuals who consistently support and uplift their colleagues.",
      iconClass: "fas fa-users",
    },
    {
      title: "The Extra Mile",
      description:
        "For those who go beyond their duties to achieve excellence.",
      iconClass: "fas fa-road",
    },
    {
      title: "The Motivator",
      description:
        "Recognizing the person who inspires and encourages the team.",
      iconClass: "fas fa-trophy",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mx-10 mt-8">
      {awards.map((award, index) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={index}>
          <EmployeeAward {...award} />
        </div>
      ))}
    </div>
  );
};

export default EmployeeAwards;
