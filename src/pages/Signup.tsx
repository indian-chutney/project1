import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  email: string;
  phone: string;
  password: string;
}

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-gray-600">
          Our signup feature is coming soon. Stay tuned!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Create Your Account
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Create Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
