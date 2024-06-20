import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function DynamicCarousel({
  carouselDataArr,
  CarouselItem,
  desktopConfigureObj,
  mediumConfigureObj,
  mobileConfigureObj,
}) {
  // Destructuring carousel configuration props for different screen sizes
  const { displayAmnt: desktopDisplayAmnt, minWidth: desktopMinWidth } =
    desktopConfigureObj;
  const { displayAmnt: mediumDisplayAmnt, minWidth: mediumMinWidth } =
    mediumConfigureObj;
  const { displayAmnt: mobileDisplayAmnt, minWidth: mobileMinWidth } =
    mobileConfigureObj;

  // State variables to manage carousel's position, screen size, styles, and active button index
  const [translatePercent, setTranslatePercent] = useState("0%");
  const [screenSize, setScreenSize] = useState(getInitialScreenSize());
  const [carouselStylesObj, setCarouselStylesObj] = useState(() =>
    getInitialCarouselStyles(screenSize)
  );
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  // Effect to handle screen resize and adjust carousel styles accordingly
  useEffect(() => {
    function handleScreenResize() {
      const newScreenSize = getScreenSize(window.innerWidth);
      if (screenSize !== newScreenSize) {
        const newCarouselStyles = extractStylesFromScreenSize(newScreenSize);
        const newCarouselPosition = `-${
          activeBtnIndex * newCarouselStyles.cardShiftAmnt
        }%`;

        setScreenSize(newScreenSize);
        setCarouselStylesObj(newCarouselStyles);
        setTranslatePercent(newCarouselPosition);
      }
    }

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, [screenSize, activeBtnIndex]);

  // Function to calculate initial carousel styles based on the initial screen size
  function getInitialCarouselStyles(initialScreenSize) {
    return extractStylesFromScreenSize(initialScreenSize);
  }

  // Function to extract carousel styles based on the screen size
  function extractStylesFromScreenSize(screenSize) {
    let displayAmnt;

    if (screenSize === "mobile") {
      displayAmnt = mobileDisplayAmnt;
    } else if (screenSize === "medium") {
      displayAmnt = mediumDisplayAmnt;
    } else {
      displayAmnt = desktopDisplayAmnt;
    }

    const cardShiftAmnt = ((1 / displayAmnt) * 100).toFixed(3);
    const cardWidth = (cardShiftAmnt * 0.88).toFixed(3);
    const cardMargin = ((cardShiftAmnt - cardWidth) / 2).toFixed(3);

    return {
      cardShiftAmnt,
      cardWidth,
      cardMargin,
    };
  }

  // Function to get the initial screen size based on the current window width
  function getInitialScreenSize() {
    return getScreenSize(window.innerWidth);
  }

  // Function to determine the screen size category based on the window width
  function getScreenSize(width) {
    if (width >= desktopMinWidth) {
      return "desktop";
    } else if (width >= mediumMinWidth) {
      return "medium";
    } else if (width >= mobileMinWidth) {
      return "mobile";
    } else {
      return "mobile";
    }
  }

  // Function to handle pagination button clicks and update the carousel position
  function handlePagBtnClick(newBtnIndex) {
    setActiveBtnIndex(newBtnIndex);

    // Calculate the new translation percentage to shift the carousel
    const formattedPercent = `-${
      carouselStylesObj.cardShiftAmnt * newBtnIndex
    }%`;

    setTranslatePercent(formattedPercent);
  }

  // Function to generate pagination buttons based on the number of carousel items
  function generatePaginationButtons() {
    const numOfBtns = carouselDataArr.length;

    return Array.from({ length: numOfBtns }, (_, btnIndex) => (
      <button
        onClick={() => handlePagBtnClick(btnIndex)}
        className={`pag-btn ${
          btnIndex === activeBtnIndex ? "pag-btn-active" : ""
        }`}
        key={btnIndex}
      ></button>
    ));
  }

  // Animation variants for the carousel using Framer Motion
  const carouselVariant = {
    initial: { x: "0%" },
    shiftX: {
      x: translatePercent,
      transition: { type: "tween", duration: 0.15 },
    },
  };

  // Dynamic styles for carousel cards based on the current screen size
  const dynamicCarouselCardStyles = {
    minWidth: `${carouselStylesObj.cardWidth}%`,
    marginLeft: `${carouselStylesObj.cardMargin}%`,
    marginRight: `${carouselStylesObj.cardMargin}%`,
  };

  // Validate and augment carousel data array to ensure smooth looping of items
  let augmentedDataArr;
  if (desktopDisplayAmnt > carouselDataArr.length) {
    console.error(
      "ERROR: You are trying to display more elements in the DynamicCarousel Component than what your carouselDataArr has"
    );
  } else {
    const augmentAmnt = desktopDisplayAmnt - 1;
    augmentedDataArr = [
      ...carouselDataArr,
      ...carouselDataArr.slice(0, augmentAmnt),
    ];
  }

  return (
    <>
      <div className="dynamic-carousel">
        {/* Viewport for the carousel */}
        <div className="carousel-viewport">
          {/* Slider with animated transition */}
          <motion.ul
            className="slider"
            variants={carouselVariant}
            initial="initial"
            animate="shiftX"
          >
            {augmentedDataArr.map((individualData, i) => (
              <CarouselItem
                carouselStyle={dynamicCarouselCardStyles}
                key={i}
                carouselData={individualData}
              />
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="carousel-pagination-btns">
        {/* Render pagination buttons */}
        {generatePaginationButtons()}
      </div>
    </>
  );
}

export default DynamicCarousel;
