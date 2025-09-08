const validateField = (name: string, value: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const phoneRegex = /^[0-9]{10,15}$/;
  // const words = value.trim().split(/\s+/).filter((word) => word !== "");

  switch (name) {
    case "firstname":
    case "lastname":
      return value.length >= 3 ? "" : "Must be at least 3 characters";
    case "company":
      return value.length >= 8 ? "" : "Must be at least 8 characters";
    case "email":
      return emailRegex.test(value) ? "" : "Invalid email address";
    // case "phone":
    //   return phoneRegex.test(value) ? "" : "Invalid phone number";
    case "message":
      return value.length >= 20 ? "" : "Must be at least 20 characters";
    default:
      return "";
  }
};

export default validateField;
