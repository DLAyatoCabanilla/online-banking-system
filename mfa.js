document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  const mfaSection = document.getElementById("mfa-section");
  const mfaCodeInput = document.getElementById("mfa-code");
  const sendMfaCodeButton = document.getElementById("send-mfa-code");
  const verifyMfaCodeButton = document.getElementById("verify-mfa-code");
  let generatedMfaCode = null;

  // Event listener for sending MFA code
  sendMfaCodeButton.addEventListener("click", function (e) {
      e.preventDefault();
      // Simulate generating a random 6-digit code
      generatedMfaCode = generateRandomMfaCode();
      alert(`TFA Code sent: ${generatedMfaCode}`);
  });

  // Event listener for form submission
  registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const userEnteredMfaCode = mfaCodeInput.value;

      if (validateMfaCode(userEnteredMfaCode)) {
          alert("Registration successful! You can now log in.");
      } else {
          alert("Invalid MFA code. Registration failed.");
      }
  });

  // Simulated function to generate a random 6-digit code
  function generateRandomMfaCode() {
      return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Simulated function to validate the MFA code (replace with actual server validation)
  function validateMfaCode(enteredCode) {
      // Simulate comparing the entered code with the generated code
      return enteredCode === generatedMfaCode;
  }
});
