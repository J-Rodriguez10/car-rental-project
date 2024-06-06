import { useState } from "react";
import ReactSlider from "react-slider";

function DynamicDoubleSlider({
  headerText,
  minVal,
  maxVal,
  defaultValArr,
  minDistance = 1,
}) {
  const [inputFieldArr, setInputFieldArr] = useState(defaultValArr);
  const [sliderThumbsPlacement, setSliderThumbsPlacement] =
    useState(defaultValArr);

  // This function activates when the user slides one of the slider thumbs
  function handleSliderChange(value) {
    setInputFieldArr(value);
    setSliderThumbsPlacement(value);
  }

  // This function activates when the user changes the input fields
  function handleInputChange(event, index) {
    const copyArr = [...inputFieldArr];
    const inputChange = event.target.value;
    copyArr[index] = inputChange;

    setInputFieldArr(copyArr);
  }

  // This function activates when the user presses a key after entering a value in the input field.
  function handleKeyPress(event, index) {
    if (event.key === "Enter") {
      handleInputValidation(event, index);
    }
  }

  // After inputting a value in the input field, this function checks to see if input is valid. It then updates the slider UI to match the inputted value.
  function handleInputValidation(event, index) {
    const copyArr = [...inputFieldArr];
    
    // Guard Clause: Making sure that we have some type of input
    if (!event.target.value) {
      copyArr[index] = index === 0 ? minVal : maxVal;
      setInputFieldArr(copyArr);
      setSliderThumbsPlacement(copyArr);
      return;
    }

    // Validating input:
    const input = Number(event.target.value);
    const isDistValid = Math.abs(copyArr[1] - copyArr[0]) >= minDistance;
    const isValid = input <= maxVal && input >= minVal && isDistValid;

    // If not valid, revert input fields to either the minVal or maxVal
    if (!isValid) {
      copyArr[index] = index === 0 ? minVal : maxVal;
      setInputFieldArr(copyArr);
    }

    // Updating the slider thumbs
    setSliderThumbsPlacement(copyArr);
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
