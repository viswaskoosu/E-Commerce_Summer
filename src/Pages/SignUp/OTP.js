import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';

function OTP({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    if (targetInput) {
      targetInput.focus();
    }
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    if (targetInput) {
      targetInput.select();
    }
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        onChange((prevOtp) => {
          const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    if (/^\d*$/.test(currentValue)) { // Only allow numeric input
      onChange((prev) => {
        const otpArray = prev.split('');
        const lastValue = currentValue[currentValue.length - 1];
        otpArray[currentIndex] = lastValue;
        return otpArray.join('');
      });
      if (currentIndex < length - 1 && currentValue !== '') {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();

      onChange((prev) => {
        const otpArray = prev.split('');
        for (let i = 0; i < length; i++) {
          const newValue = pastedText[i] || '';
          otpArray[currentIndex + i] = newValue;
        }
        return otpArray.join('');
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <StyledInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={(ele) => {
              inputRefs.current[index] = ele;
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            value={value[index] ?? ''}
            aria-label={`Digit ${index + 1} of OTP`}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

OTP.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  separator: PropTypes.node,
  value: PropTypes.string.isRequired,
};

export default function OTPInput({ otp, setOtp, length }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <OTP separator={<span></span>} value={otp} onChange={setOtp} length={length} />
    </Box>
  );
}

const StyledInput = styled('input')({
  width: '40px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
  fontWeight: 'normal',
  lineHeight: '1.5',
  padding: '8px 0px',
  borderRadius: '8px',
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  '&:hover': {
    borderColor: '#007bff',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '#007bff',
    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)',
  },
});
