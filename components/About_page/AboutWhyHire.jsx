import { AcademicCapIcon, UserCircleIcon, HandRaisedIcon } from '@heroicons/react/24/solid';

export default function WhyHireUs() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Text Content */}
        <div>
          <p className="text-red-600 font-medium">Why choose us</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Why Hire Us As A <br /> Virtual Assistant?
          </h2>
        </div>

        {/* Right Text Description */}
        <div>
          <p className="text-gray-600">
            YesAssistant enables people to focus on important tasks that drive business growth quickly.
            Our Businesses hire virtual assistants to handle an excessive amount of tasks.
            Our team proceeds with your business objectives strategically.
          </p>
        </div>
      </div>

      {/* Features Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-yellow-500 text-white text-center px-6 py-10 rounded">
          <div className="flex justify-center mb-4">
            <AcademicCapIcon className="h-12 w-12 text-yellow-100" />
          </div>
          <h3 className="text-xl font-bold mb-2">Highly Educated Assistants</h3>
          <p className="text-sm">
            All our team members are highly educated. They must have to finish graduation to join the team.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 text-white text-center px-6 py-10 rounded">
          <div className="flex justify-center mb-4">
            <UserCircleIcon className="h-12 w-12 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold mb-2">Already Trained. Ready Today</h3>
          <p className="text-sm">
            Many of the members are working for over 5 years with us. They are highly trained to do the work.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-red-600 text-white text-center px-6 py-10 rounded">
          <div className="flex justify-center mb-4">
            <HandRaisedIcon className="h-12 w-12 text-red-100" />
          </div>
          <h3 className="text-xl font-bold mb-2">VA Bad fit? No Problem</h3>
          <p className="text-sm">
            Get 2 Hours of Work for Free. We have a satisfaction guarantee. We have many satisfied customers.
          </p>
        </div>
      </div>
    </section>
  );
}