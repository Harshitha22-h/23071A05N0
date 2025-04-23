function Registration() {
  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dob" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
