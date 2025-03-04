const Contact = () => {
  return (
    <div className="form-container">
      <h1 className="heading-1">Contact Form</h1>
      
      <p className="mb-8">
        Please fill out this form to get in touch with us about any questions or concerns you may have.
        We're here to help you on your gardening journey!
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="queryType" className="form-label">Query Type</label>
          <input
            type="text"
            id="queryType"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Comment / Question</label>
          <textarea
            id="message"
            rows={4}
            className="form-input form-textarea"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;