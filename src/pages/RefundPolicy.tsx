export default function RefundPolicy() {
  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Refund & Cancellation Policy
      </h1>

      <p className="mb-4">
        At Bharatpayee, we prioritize customer satisfaction and strive to
        provide a seamless experience...
      </p>

      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Eligibility for Cancellations
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Pending Transactions may be eligible for cancellation.</li>
        <li>Scheduled Services can be canceled within the allowed period.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Cancellation Process
      </h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>Initiate Cancellation Request via customer support.</li>
        <li>Review and Verification of your request.</li>
        <li>Processing Time: 7–10 business days.</li>
      </ol>

      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Refunds for Canceled Transactions
      </h2>
      <p className="mb-4">
        Refunds will be issued to the original payment method and processed
        within 10–15 business days after approval.
      </p>

      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Non-Cancelable Services
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Completed transactions</li>
        <li>Administrative fees</li>
        <li>Third-party services (subject to partner policies)</li>
      </ul>

      <p className="mt-4">
        Contact us at{" "}
        <a
          href="mailto:info@bharatpaye.tech"
          className="text-blue-900 underline"
        >
          info@bharatpaye.tech
        </a>{" "}
        or call 9398619837 for assistance.
      </p>
    </div>
  );
}
