import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Pricing Plans</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <p className="text-lg">$10/month</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Pro</h2>
          <p className="text-lg">$30/month</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;