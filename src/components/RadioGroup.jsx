import styled from "styled-components";

export default function RadioGroup({ name, options, value, onChange }) {
  return (
    <StyledWrapper>
      <div className="radio-buttons-container">
        {options.map((option, index) => {
          const id = `${name}-${index}`;

          return (
            <div className="radio-button" key={option}>
              <input
                type="radio"
                id={id}
                name={name}
                className="radio-button__input"
                checked={value === option}
                onChange={() => onChange(option)}
              />
              <label htmlFor={id} className="radio-button__label poll-option">
                <span className="radio-button__custom" />
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  .radio-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radio-button {
    position: relative;
  }

  .radio-button__input {
    display: none;
  }

  .radio-button__label {
    padding-left: 40px;
    cursor: pointer;
    color: #fff;
    position: relative;
    background: var(--box)
  }

  .radio-button__custom {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #555;
    transition: 0.3s;
  }

  .radio-button__input:checked + .radio-button__label .radio-button__custom {
    border: 5px solid var(--lightColor);
  }

  .radio-button__input:checked + .radio-button__label {
    color: var(--lightColor);
  }
`;
