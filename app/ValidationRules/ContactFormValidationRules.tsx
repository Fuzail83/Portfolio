export default function ContactFormValidationRules(props) {
  const { name, email, phone } = props;
  let errors = {};

  if (!name) {
    errors.name = "First Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  }

  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10,12}$/.test(phone)) {
    errors.phone = "Phone must be 10 to 12 digits";
  }

  return errors;
}
