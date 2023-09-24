import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="outline m-8 rounded-md p-5">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {isVisible ? (
        <div>
          <p className="text-slate-600">{description}</p>
          <button
            className="text-blue-600 border border-blue-600 px-2 rounded-sm mt-5"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        </div>
      ) : (
        <button
          className="text-blue-600 border border-blue-600 px-2 rounded-sm mt-5"
          onClick={() => setIsVisible(true)}
        >
          More
        </button>
      )}
    </div>
  );
};

const BookFlight = () => {
  const [sectionConfig, setSectionConfig] = useState(null);

  function handleCollapse(section) {
    if (section === sectionConfig) setSectionConfig(null);
    else setSectionConfig(section);
  }

  const descData =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Odio tempor orci dapibus ultrices in iaculis nunc. Curabitur gravida arcu ac tortor dignissim convallis aenean. Arcu cursus euismod quis viverra. Ultricies tristique nulla aliquet enim tortor at auctor. Sapien et ligula ullamcorper malesuada proin libero. Nec ultrices dui sapien eget mi proin sed libero. Convallis convallis tellus id interdum velit laoreet. Amet volutpat consequat mauris nunc congue nisi vitae.";

  return (
    <div>
      <Section
        title="Flight"
        description={descData}
        isVisible={sectionConfig === "Flight"}
        setIsVisible={() => handleCollapse("Flight")}
      />

      <Section
        title="Train"
        description={descData}
        isVisible={sectionConfig === "Train"}
        setIsVisible={() => handleCollapse("Train")}
      />

      <Section
        title="Hotel"
        description={descData}
        isVisible={sectionConfig === "Hotel"}
        setIsVisible={() => handleCollapse("Hotel")}
      />

      <Section
        title="Cab"
        description={descData}
        isVisible={sectionConfig === "Cab"}
        setIsVisible={() => handleCollapse("Cab")}
      />
    </div>
  );
};

export default BookFlight;
