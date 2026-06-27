import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  const contactInfo = [
    { Icon: MdEmail,      label: "Email",    value: "sofianehot01@gmail.com"   },
    { Icon: MdLocationOn, label: "Location", value: "Blida, Algeria"    },
    { Icon: MdPhone,      label: "Phone",    value: "+213780333925"     },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 w-full"
      style={{ background: "#0A0A0A", color: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-bold tracking-[.2em] uppercase mb-4"
            style={{ color: "#FFE000" }}
          >
            Get in Touch
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold"
            style={{ color: "#FFFFFF" }}
          >
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Info card */}
          <div
            className="reveal-left flex flex-col gap-6 p-8"
            style={{
              background: "#111111",
              border: "1px solid #2A2A2A",
              borderLeft: "3px solid #FFE000",
              borderRadius: "8px",
            }}
          >
            <h4
              className="font-display text-xl font-bold"
              style={{ color: "#FFFFFF" }}
            >
              Contact Information
            </h4>

            <div className="flex flex-col gap-5">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "#1E1E1E",
                      border: "1px solid #2A2A2A",
                      borderRadius: "6px",
                    }}
                  >
                    <Icon size={17} color="#FFE000" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-widest"
                      style={{ color: "#A3A3A3" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#E5E5E5" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA block */}
            <div
              className="mt-auto p-6 relative overflow-hidden"
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
              }}
            >
              {/* Subtle yellow glow dot */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,224,0,0.12) 0%, transparent 70%)",
                }}
              />
              <p
                className="font-display font-bold text-base mb-1 relative z-10"
                style={{ color: "#FFFFFF" }}
              >
                For Corporations
              </p>
              <p
                className="text-xs mb-5 relative z-10"
                style={{ color: "#A3A3A3" }}
              >
                Request a personal meeting
              </p>
              <button
                className="relative z-10 text-xs font-bold px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFE000",
                  color: "#0A0A0A",
                  borderRadius: "6px",
                }}
              >
                Request Meeting
              </button>
            </div>
          </div>

          {/* Form card */}
          <div
            className="reveal-right p-8"
            style={{
              background: "#111111",
              border: "1px solid #2A2A2A",
              borderRadius: "8px",
            }}
          >
            <h4
              className="font-display text-xl font-bold mb-7"
              style={{ color: "#FFFFFF" }}
            >
              Send a Message
            </h4>

            <form className="flex flex-col gap-4">
              {[
                { type: "text",  placeholder: "Full Name" },
                { type: "email", placeholder: "Email"     },
                { type: "text",  placeholder: "Subject"   },
              ].map(({ type, placeholder }) => (
                <input
                  key={placeholder}
                  type={type}
                  placeholder={placeholder}
                  className="text-sm px-4 py-3 outline-none transition-all duration-200"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "6px",
                    color: "#FFFFFF",
                    "::placeholder": { color: "#555555" },
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#FFE000";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#2A2A2A";
                  }}
                />
              ))}

              <textarea
                rows={4}
                placeholder="Your message..."
                className="text-sm px-4 py-3 resize-none outline-none transition-all duration-200"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "6px",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#FFE000";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#2A2A2A";
                }}
              />

              <button
                type="submit"
                className="font-semibold py-3.5 text-sm mt-1 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFE000",
                  color: "#0A0A0A",
                  borderRadius: "6px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;