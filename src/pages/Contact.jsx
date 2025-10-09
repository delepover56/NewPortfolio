import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await emailjs.send(
        "service_6vy2z4m",
        "template_qtaiccb",
        data,
        "HFW-a6QjiVhvMlD8Q"
      );
      setEmailStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setEmailStatus("error");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center max-w-[100%] lg:w-[65%] 2xl:w-[700px] h-auto gap-[30px] select-none mt-10">
      <div className="text-white w-full py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-3xl lg:text-4xl text-[#00ff5e] mb-5">
          Hire me
        </h1>

        <p className="poppins text-md text-gray-300 leading-relaxed mb-6">
          I'm currently open to
          <span className="text-[#00ff5e] font-medium"> internships</span>,
          <span className="text-[#00ff5e] font-medium"> freelance work</span>,
          or any opportunity where I can apply and grow my skills in
          <span className="text-[#00ff5e] font-medium"> React.js</span> through
          real-world experience.
          <br />
          <br />
          This portfolio marks my first project in
          <span className="text-[#00ff5e] font-medium"> React.js</span>. It's
          part of my transition from
          <span className="text-[#00ff5e] font-medium"> HTML/CSS</span> and
          <span className="text-[#00ff5e] font-medium"> WordPress</span> to
          modern JavaScript frameworks.
          <br />
          <br />
          I'm open to opportunities where I can learn, contribute, and grow.
          Let’s connect — fill out the form below or reach out via my links.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name can only contain letters",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                }}
                placeholder="Enter your name"
                className="poppins text-sm font-medium bg-transparent border border-[#00ff5e66] rounded-md p-2 outline-none w-full transition-all duration-300 focus:ring-2 focus:ring-[#00ff5e99] focus:border-[#00ff5e] focus:shadow-md focus:shadow-[#00ff5e] capitalize py-3.5 px-4"
              />
              {errors.name && (
                <p className="text-sm text-red-400 poppins mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email"
                className="poppins text-sm font-medium bg-transparent border border-[#00ff5e66] rounded-md p-2 outline-none w-full transition-all duration-300 focus:ring-2 focus:ring-[#00ff5e99] focus:border-[#00ff5e] focus:shadow-md focus:shadow-[#00ff5e] capitalize py-3.5 px-4"
              />
              {errors.email && (
                <p className="text-sm text-red-400 poppins mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  validate: (value) =>
                    value.replace(/\D/g, "").length >= 7
                      ? true
                      : "Phone must be at least 7 digits",
                })}
                placeholder="Enter your phone number"
                className="poppins text-sm font-medium bg-transparent border border-[#00ff5e66] rounded-md p-2 outline-none w-full transition-all duration-300 focus:ring-2 focus:ring-[#00ff5e99] focus:border-[#00ff5e] focus:shadow-md focus:shadow-[#00ff5e] capitalize py-3.5 px-4"
              />
              {errors.phone && (
                <p className="text-sm text-red-400 poppins mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="subject"
                {...register("subject", { required: "Purpose is required" })}
                placeholder="Purpose of Message"
                className="poppins text-sm font-medium bg-transparent border border-[#00ff5e66] rounded-md p-2 outline-none w-full transition-all duration-300 focus:ring-2 focus:ring-[#00ff5e99] focus:border-[#00ff5e] focus:shadow-md focus:shadow-[#00ff5e] capitalize py-3.5 px-4"
              />
              {errors.subject && (
                <p className="text-sm text-red-400 poppins mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="w-full">
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
              className="poppins text-sm font-medium bg-transparent border border-[#00ff5e66] rounded-md p-2 outline-none w-full transition-all duration-300 focus:ring-2 focus:ring-[#00ff5e99] focus:border-[#00ff5e] focus:shadow-md focus:shadow-[#00ff5e] resize-none py-3.5 px-4"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-400 poppins mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Email Status */}
          {emailStatus === "success" && (
            <p className="text-[#00ff5e] text-sm mt-2">
              Your message was sent successfully!
            </p>
          )}
          {emailStatus === "error" && (
            <p className="text-red-400 text-sm mt-2">
              Failed to send message. Please try again later.
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-start items-center gap-4">
            <button
              type="submit"
              className="mt-2 bg-[#053a00ff] rounded-xl border border-[#00ff5e66] backdrop-blur-md py-[10px] px-[20px] text-[#00ff5e] poppins-semibold hover:border-[#053a00ff] hover:bg-[#00ff5e] hover:text-[#053a00ff] transition-all duration-400 w-full sm:w-3xs 2xl:w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
