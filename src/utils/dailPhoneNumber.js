export const handlePhoneNumberClick = (phoneNumber) => {
  if (phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
  }
};
