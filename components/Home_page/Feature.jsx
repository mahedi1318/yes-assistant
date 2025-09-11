"use client";
import { FaMedal } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const features = [
  {
    icon: <FaMedal className="text-red-500 text-4xl mb-4" />,
    title: "Experienced Virtual Assistants",
    description:
      "With years of expertise, our dedicated assistants have successfully completed over 50,000 projects for clients across diverse industries. We specialize in delivering personalized support to each client’s unique needs. Work with our highly skilled, dependable virtual assistants who are committed to your success.",
  },
  {
    icon: <FaUserShield className="text-red-500 text-4xl mb-4" />,
    title: "Niche-Specific VAs",
    description:
      "Our vast niche-specific virtual assistants cover your industry too, whether small business, insurance, e-commerce, or real estate. The niche-specific service helps the VA better understand your target audience and market, as well as the unique demands of your industry. Trust our experts to deliver efficiency and industry insight tailored to your success.",
  },
  {
    icon: <FaMoneyBillTrendUp className="text-red-500 text-4xl mb-4" />,
    title: "Full Support Lower Costs",
    description:
      "Virtual assistants are way more cost-effective solutions than your in-house employees, who avail all the employee benefits. With our remote assistants, you only pay for the work done, either on an hourly basis or by choosing a pricing plan, which is again the best value for your money.",
  },
   {
    icon: <FaMoneyBillTrendUp className="text-red-500 text-4xl mb-4" />,
    title: "Full Support Lower Costs",
    description:
      "Virtual assistants are way more cost-effective solutions than your in-house employees, who avail all the employee benefits. With our remote assistants, you only pay for the work done, either on an hourly basis or by choosing a pricing plan, which is again the best value for your money.",
  },
   {
    icon: <FaMoneyBillTrendUp className="text-red-500 text-4xl mb-4" />,
    title: "Full Support Lower Costs",
    description:
      "Virtual assistants are way more cost-effective solutions than your in-house employees, who avail all the employee benefits. With our remote assistants, you only pay for the work done, either on an hourly basis or by choosing a pricing plan, which is again the best value for your money.",
  },
   {
    icon: <FaMoneyBillTrendUp className="text-red-500 text-4xl mb-4" />,
    title: "Full Support Lower Costs",
    description:
      "Virtual assistants are way more cost-effective solutions than your in-house employees, who avail all the employee benefits. With our remote assistants, you only pay for the work done, either on an hourly basis or by choosing a pricing plan, which is again the best value for your money.",
  },
];

export default function FeatureSection() {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
        Choose Us & Reduce 80% Staffing Cost
      </h2>
      <p className=" text-gray-600 mb-10">
        Save time & money, get flexibility and the most affordable VA solution from YesAssistant.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            {feature.icon}
            <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}