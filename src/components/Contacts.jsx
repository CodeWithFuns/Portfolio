import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-200 pb-2 text-left">
        Contact
      </h2>
      <div className="space-y-4 text-left text-lg">
        <p>
          <span className="font-semibold">📍 Location:</span> Birgunj, Nepal
        </p>
        <p>
          <span className="font-semibold">📧 Email:</span> aslam.ansari.ku@gmail.com
        </p>
        <p>
          <span className="font-semibold">📱 Mobile:</span> +9779844251544
        </p>
      </div>
    </section>
  );
};

export default Contact;
