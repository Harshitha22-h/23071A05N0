function Contact() {
  const contactInfo = {
    email: 'support@ecommerce.com',
    phone: '+1-234-567-890',
    address: 'VNR Street 123, Bachupally, Hyderabad',
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Address: {contactInfo.address}</p>
    </div>
  );
}

export default Contact;
