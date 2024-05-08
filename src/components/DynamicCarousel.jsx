
/**
 * DynamicCarousel Component:
 * 
 * This component creates a dynamic carousel that adapts its display based on the screen size.
 * It renders a list of carousel items with pagination buttons for navigation.
 * The number of items displayed and their width and margin adjust responsively according to the screen size.
 * 
 * Props:
 * - carouselDataArr: Array of data to be displayed in the carousel.
 * - CarouselItem: Component to render each individual carousel item.
 * - desktopConfigureObj, mediumConfigureObj, mobileConfigureObj: Configuration objects specifying the display amount and minimum width for different screen sizes.
 * 
 * ! NOTE: the CarouselItem child component must be able to recieve carouselData and carouselStyles for this component to do its job.
 */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function DynamicCarousel({
  carouselDataArr,
  CarouselItem,
  desktopConfigureObj,
  mediumConfigureObj,
  mobileConfigureObj,
}) {
  // Destructuring carousel configuration props
  const { displayAmnt: desktopDisplayAmnt, minWidth: desktopMinWidth } =
    desktopConfigureObj;
  const { displayAmnt: mediumDisplayAmnt, minWidth: mediumMinWidth } =
    mediumConfigureObj;
  const { displayAmnt: mobileDisplayAmnt, minWidth: mobileMinWidth } =
    mobileConfigureObj;

  // State variables
  const [translatePercent, setTranslatePercent] = useState("0%");
  const [screenSize, setScreenSize] = useState(getInitialScreenSize());
  const [carouselStylesObj, setCarouselStylesObj] = useState(() =>
    getInitialCarouselStyles(screenSize)
  );
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  // Effect for handling screen resize through a resize event listener
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
  }, [screenSize]);

  // Function to calculate initial carousel styles based on screen size
  function getInitialCarouselStyles(initialScreenSize) {
    return extractStylesFromScreenSize(initialScreenSize);
  }

  // Function to extract carousel styles based on screen size
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

  // Function to get initial screen size
  function getInitialScreenSize() {
    return getScreenSize(window.innerWidth);
  }

  // Function to determine screen size based on width
  function getScreenSize(width) {
    if (width >= desktopMinWidth) {
      return "desktop";
    } else if (width >= mediumMinWidth) {
      return "medium";
    } else if (width >= mobileMinWidth) {
      return "mobile";
    } else {
      console.error(
        "There is no carousel design for width below the minimum mobile width set:",
        mobileMinWidth
      );
    }
  }

  // Function to handle pagination button click
  function handlePagBtnClick(newBtnIndex) {
    setActiveBtnIndex(newBtnIndex);

    // Negative percentage value translates slider RIGHT
    const formattedPercent = `-${
      carouselStylesObj.cardShiftAmnt * newBtnIndex
    }%`;

    setTranslatePercent(formattedPercent);
  }

  // Function to generate pagination buttons
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

  // Animation variants
  const carouselVariant = {
    initial: { x: "0%" },
    shiftX: {
      x: translatePercent,
      transition: { type: "tween", duration: 0.15 },
    },
  };

  // Styles for the dynamic carousel cards extracted from carouselStyleObj state
  const dynamicCarouselCardStyles = {
    minWidth: `${carouselStylesObj.cardWidth}%`,
    marginLeft: `${carouselStylesObj.cardMargin}%`,
    marginRight: `${carouselStylesObj.cardMargin}%`,
  };

  // Validating and augmenting data
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
        {/* Viewport */}
        <div className="carousel-viewport">
          
          {/* Slider */}
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
        {/* Generate pagination buttons */}
        {generatePaginationButtons()}
      </div>
    </>
  );
}

export default DynamicCarousel;
