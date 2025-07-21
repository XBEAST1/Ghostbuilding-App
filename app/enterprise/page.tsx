"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    companyWebsite: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.workEmail.trim()) newErrors.workEmail = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.workEmail))
        newErrors.workEmail = "Email is invalid";
      if (!formData.phoneNumber.trim())
        newErrors.phoneNumber = "Phone number is required";
      if (!formData.companyWebsite.trim())
        newErrors.companyWebsite = "Company website is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progressPercentage = (step / 3) * 100;

  const getHeading = () => {
    if (step === 1) {
      return "Contact details";
    } else if (step === 2) {
      return "What can we help you with?";
    } else if (step === 3) {
      return "Additional information";
    }
  };

  return (
    <>
      <div className="pt-36 pb-24 max-w-3xl ms-0 sm:ms-24 p-6 text-white rounded-lg font-[family-name:var(--font-poppins)]">
        <h2 className="text-2xl font-semibold mb-4">{getHeading()}</h2>

        <p className="text-md text-gray-400 mb-6">
          Curious to discover how ghost can speed up development process? Meet
          with one of our product experts to learn more.
        </p>

        {/* Form Content */}
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {step === 1 && (
            <>
              {/* Step 1: Contact Details */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First name*
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="mt-2 w-full p-6"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last name*
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="mt-2 w-full p-6"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="workEmail" className="text-sm font-medium">
                  Work email*
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="Enter your work email"
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  className="mt-2 p-6"
                />
                {errors.workEmail && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.workEmail}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="mt-2 p-6"
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="companyWebsite" className="text-sm font-medium">
                  Company&apos;s website*
                </Label>
                <Input
                  id="companyWebsite"
                  type="url"
                  placeholder="Enter your company's website"
                  value={formData.companyWebsite}
                  onChange={(e) =>
                    setFormData({ ...formData, companyWebsite: e.target.value })
                  }
                  className="mt-2 p-6"
                />
                {errors.companyWebsite && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.companyWebsite}
                  </p>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {/* Step 2: Problem Details */}
              <div>
                <Label htmlFor="problem" className="text-sm font-medium">
                  What problem are you trying to solve with Ghosty?
                </Label>
                <Textarea id="problem" className="mt-2 min-h-[100px]" />
              </div>

              <div>
                <Label htmlFor="endUsers" className="text-sm font-medium mt-6">
                  How many end-users will touch Ghosty in the first 6 months?
                </Label>
                <Input id="endUsers" type="number" className="mt-2 p-6" />
              </div>

              <div>
                <Label className="text-sm font-medium mt-10">
                  Which of these use cases are you interested in?
                </Label>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <input type="checkbox" id="prototype" className="mr-2" />
                    <label htmlFor="prototype">
                      Product Prototype Development
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="internalTool" className="mr-2" />
                    <label htmlFor="internalTool">Internal Tool Building</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="customerPortal"
                      className="mr-2"
                    />
                    <label htmlFor="customerPortal">
                      Customer Portal Creation
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="mvp" className="mr-2" />
                    <label htmlFor="mvp">MVP Development</label>
                  </div>
                  <div>
                    <input type="checkbox" id="uiux" className="mr-2" />
                    <label htmlFor="uiux">UI/UX Prototyping</label>
                  </div>
                  <div>
                    <input type="checkbox" id="customWeb" className="mr-2" />
                    <label htmlFor="customWeb">Custom Web Applications</label>
                  </div>
                  <div>
                    <input type="checkbox" id="saas" className="mr-2" />
                    <label htmlFor="saas">SaaS Product Development</label>
                  </div>
                  <div>
                    <input type="checkbox" id="user" className="mr-2" />
                    <label htmlFor="user">User</label>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {/* Step 3: Additional Information */}
              <div>
                <Label htmlFor="timeline" className="text-sm font-medium">
                  Do you have a timeline to getting started?
                </Label>
                <select
                  id="timeline"
                  defaultValue=""
                  className="mt-2 w-full p-4 bg-[#25345D] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                >
                  <option value="" disabled>
                    Select your timeline
                  </option>
                  <option value="nextMonth">Next Month</option>
                  <option value="1-2Month">1-2 Month</option>
                  <option value="3-6Months">3-6 Months</option>
                  <option value="6-12Months">6-12 Months</option>
                  <option value="justExploring">Just Exploring</option>
                </select>
              </div>

              {/* Textarea for Additional Information */}
              <div className="mt-6">
                <Label htmlFor="additionalInfo" className="text-sm font-medium">
                  Is there anything additional you would like to add?
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Enter additional information here..."
                  className="mt-2 w-full min-h-[300px] p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
              </div>
            </>
          )}

          {/* Progress Bar and Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 items-center mt-12 sm:mt-14 w-full">
            {/* Progress Bar */}
            <div className="flex items-center gap-4 w-full">
              <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#7C3AED] h-2 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-sm whitespace-nowrap">{step}/3</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {step > 1 && (
                <Button
                  onClick={handlePrevious}
                  className="cursor-pointer bg-gray-500 text-white py-3 px-6 hover:bg-gray-600 w-full sm:w-auto"
                >
                  Back
                </Button>
              )}
              {step < 3 && (
                <Button
                  onClick={handleNext}
                  className="cursor-pointer bg-[#5528A3] text-white py-3 px-6 hover:bg-[#5528a3bc] w-full sm:w-auto"
                >
                  Continue
                </Button>
              )}
              {step === 3 && (
                <Button className="cursor-pointer bg-[#5528A3] text-white py-3 px-6 hover:bg-[#5528a3bc] w-full sm:w-auto">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>

      <ContactSection />
    </>
  );
};

export default ContactForm;
