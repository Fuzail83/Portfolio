export default function ContactFormValidationRules(props: any) {
  const { name, email, phone } = props;
  let errors: any = {};

  if (!name || !name.trim()) {
    errors.name = "First Name is required";
  }

  if (!email || !email.trim()) {
    errors.email = "Email is required";
  }

  if (!phone || !phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10,12}$/.test(phone)) {
    errors.phone = "Phone must be 10 to 12 digits";
  }

  return errors;
}
