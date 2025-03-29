import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <form className="mt-6">
        <input className="border p-2 w-full" type="text" placeholder="Name" />
        <input className="border p-2 w-full mt-4" type="email" placeholder="Email" />
        <textarea className="border p-2 w-full mt-4" placeholder="Message"></textarea>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
