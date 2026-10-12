"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          company: formData.company || "Not specified",
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-semibold text-dark-navy mb-4"
            >
              Let&apos;s discuss your{" "}
              <span className="text-gradient">project</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#4A5568] mb-8"
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours with next steps.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-primary" />
                </div>
                <div>
                  <p className="text-sm text-[#718096] mb-1">Email us at</p>
                  <a
                    href="mailto:info@savoirlabs.com"
                    className="text-dark-navy font-medium hover:text-teal-primary transition-colors"
                  >
                    info@savoirlabs.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 bg-light-gray rounded-xl border border-[#E2E8F0]"
              >
                <h4 className="font-medium text-dark-navy mb-2">What happens next?</h4>
                <ul className="space-y-2 text-sm text-[#4A5568]">
                  {[
                    "We'll review your message and get back to you",
                    "Schedule a call to discuss your needs in detail",
                    "Receive a proposal with scope and timeline",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-primary/10 text-teal-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-light-gray rounded-xl p-8 text-center border border-[#E2E8F0]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-teal-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-teal-primary" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-semibold text-dark-navy mb-2"
                  >
                    Message sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#4A5568] mb-6"
                  >
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setFormStatus("idle")}
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-primary hover:underline"
                  >
                    Send another message
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-light-gray rounded-xl p-6 lg:p-8 border border-[#E2E8F0]"
                >
                  <div className="space-y-5">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-dark-navy mb-1.5">
                        Your name *
                      </label>
                      <motion.input
                        whileFocus={{ borderColor: "#18BCB7", boxShadow: "0 0 0 3px rgba(24, 188, 183, 0.1)" }}
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-dark-navy placeholder:text-[#718096] focus:outline-none transition-all"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-dark-navy mb-1.5">
                        Email address *
                      </label>
                      <motion.input
                        whileFocus={{ borderColor: "#18BCB7", boxShadow: "0 0 0 3px rgba(24, 188, 183, 0.1)" }}
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-dark-navy placeholder:text-[#718096] focus:outline-none transition-all"
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-dark-navy mb-1.5">
                        Company name
                      </label>
                      <motion.input
                        whileFocus={{ borderColor: "#18BCB7", boxShadow: "0 0 0 3px rgba(24, 188, 183, 0.1)" }}
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-dark-navy placeholder:text-[#718096] focus:outline-none transition-all"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-dark-navy mb-1.5">
                        Tell us about your project *
                      </label>
                      <motion.textarea
                        whileFocus={{ borderColor: "#18BCB7", boxShadow: "0 0 0 3px rgba(24, 188, 183, 0.1)" }}
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you looking to build? What challenges are you facing?"
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-dark-navy placeholder:text-[#718096] focus:outline-none transition-all resize-y min-h-[120px]"
                      />
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {formStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm overflow-hidden"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          {errorMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formStatus === "sending"}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-white bg-gradient-to-r from-teal-primary to-teal-light hover:shadow-teal disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
