import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { sessionTypes } from "../data/site";
import { Reveal } from "./Reveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  eventDate: string;
  location: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  sessionType: "",
  eventDate: "",
  location: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) errors.email = "Enter your email.";
  else if (!emailPattern.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.sessionType) errors.sessionType = "Choose a session type.";
  if (!form.message.trim()) errors.message = "Tell me a bit about your story.";
  return errors;
}

const fieldClasses =
  "w-full border-b border-espresso/25 bg-transparent py-3 text-espresso placeholder:text-espresso/35 focus:border-coral transition-colors";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <section id="contact" className="bg-peach px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight text-espresso sm:text-5xl">
            Let's Create Something Timeless
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-espresso/60">
            Tell me about your story, your event, or the moments you'd like captured.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full flex-col items-start justify-center gap-4 border border-gold/40 bg-cream/60 p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-coral text-coral">
                <Check size={20} />
              </span>
              <p className="font-display text-2xl text-espresso">Inquiry sent.</p>
              <p className="text-sm leading-relaxed text-espresso/60">
                Thank you for sharing your story. I'll be in touch within two business days to
                talk through the details.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-nav mt-2 border-b border-espresso/40 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:border-coral hover:text-coral"
              >
                SEND ANOTHER INQUIRY
              </button>
            </motion.div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClasses}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-coral">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={fieldClasses}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-coral">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="sessionType" className="sr-only">
                    Type of Session
                  </label>
                  <select
                    id="sessionType"
                    value={form.sessionType}
                    onChange={(e) => update("sessionType", e.target.value)}
                    className={`${fieldClasses} ${form.sessionType ? "text-espresso" : "text-espresso/35"}`}
                    aria-invalid={Boolean(errors.sessionType)}
                    aria-describedby={errors.sessionType ? "sessionType-error" : undefined}
                  >
                    <option value="" disabled className="bg-cream text-espresso/50">
                      Type of Session
                    </option>
                    {sessionTypes.map((type) => (
                      <option key={type} value={type} className="bg-cream text-espresso">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.sessionType && (
                    <p id="sessionType-error" className="mt-1 text-xs text-coral">
                      {errors.sessionType}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="eventDate" className="font-nav mb-1 block text-xs uppercase tracking-[0.1em] text-espresso/40">
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => update("eventDate", e.target.value)}
                    className={`${fieldClasses} [color-scheme:light]`}
                  />
                </div>

                <div>
                  <label htmlFor="location" className="sr-only">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Location"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your story..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${fieldClasses} resize-none`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-coral">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="font-nav mt-4 self-start bg-coral px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-coral/85"
              >
                SEND INQUIRY
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
