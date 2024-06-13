import { useState } from "react";
import ReactSlider from "react-slider";

import { useDebounce } from "./CustomHooks/useDebounce";
import { areArraysEqual } from "./utilityFunctions";

function DynamicDoubleSlider({
  headerText,
  defaultValArr,
  state,
  updateStateFunction,
  stateKey,
  minVal = undefined,
  maxVal = undefined,
  minDistance = 1,
}) {
  // State for input field UI
  const [inputFieldArr, setInputFieldArr] = useState(defaultValArr);
  // State for slider thumbs UI
  const [sliderThumbsPlacement, setSliderThumbsPlacement] =
    useState(defaultValArr);

  // Getting minimum and maximum value from default values
  if (minVal === undefined || maxVal === undefined) {
    minVal = defaultValArr[0];
    maxVal = defaultValArr[1];
  }


  const debouncedUpdateStateFunction = useDebounce(updateStateFunction);
  // Activates when user moves the thumbs from the sliders
  function handleSliderChange(valueArr) {
    console.log("handling slider change", valueArr);
    setInputFieldArr(valueArr);
    setSliderThumbsPlacement(valueArr);
    debouncedUpdateStateFunction(stateKey, valueArr);
  }

  // Activates when user changes the input fields from the sliders
  function handleInputChange(event, index) {
    const copyArr = [...inputFieldArr];
    const inputChange = event.target.value;
    copyArr[index] = inputChange;

    setInputFieldArr(copyArr);
  }

  // Activates when user presses "Enter" after inputting a value in the input fields.
  function handleKeyPress(event, index) {
    if (event.key === "Enter") {
      handleInputValidation(event, index);
    }
  }

  // Validates the data input before updating it to the parent state
  function handleInputValidation(event, index) {
    console.log("IM SUPPOSED TO BE UPDATING");
    const copyArr = [...inputFieldArr];

    // Guard Clause: Checking to see if we have anything to work with, otherwise the input fields reset to the default min/max values.
    if (!event.target.value) {
      copyArr[index] = index === 0 ? minVal : maxVal;
      setInputFieldArr(copyArr);
      setSliderThumbsPlacement(copyArr);
      updateStateFunction(stateKey, copyArr);
      return;
    }

    // Validating input:
    const input = Number(event.target.value);
    const isDistValid = Math.abs(copyArr[1] - copyArr[0]) >= minDistance;
    const isValid = input <= maxVal && input >= minVal && isDistValid;

    // If not valid, reset the input fields.
    if (!isValid) {
      copyArr[index] = index === 0 ? minVal : maxVal;
      setInputFieldArr(copyArr);
    } else {
      copyArr[index] = input; // If valid, we insert the validated input
    }

    // Updating the slider thumbs UI
    setSliderThumbsPlacement(copyArr);

    // Finally, updating the parent state to match UI.
    updateStateFunction(stateKey, copyArr);
  }

  return (
    <div className="dynamic-double-slider">
      <header>
        <h2>{headerText}</h2>
      </header>

      {/* Slider */}
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={defaultValArr}
        // This prop controls the placement of slides
        value={sliderThumbsPlacement}
        min={minVal}
        max={maxVal}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={minDistance}
        onChange={(value, index) => handleSliderChange(value)}
      />

      {/* Input fields */}
      <div className="input-fields">
        {/* Minimum field */}
        <div className="field">
          <input
            type="number"
            className="input-min"
            value={inputFieldArr[0]}
            onChange={(e) => handleInputChange(e, 0)}
            onBlur={(e) => handleInputValidation(e, 0)}
            onKeyDown={(e) => handleKeyPress(e, 0)}
          />
        </div>

        {/* Separator */}
        <div className="separator">-</div>

        {/* Maximum field */}
        <div className="field">
          <input
            type="number"
            className="input-max"
            value={inputFieldArr[1]}
            onChange={(e) => handleInputChange(e, 1)}
            onBlur={(e) => handleInputValidation(e, 1)}
            onKeyDown={(e) => handleKeyPress(e, 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default DynamicDoubleSlider;
