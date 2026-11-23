import { Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { METRICS, TESTIMONIALS } from "@/config/constants";

const TestimonialsSection = () => (
  <section id="testimonials" className="section">
    <div className="container-x">
      <SectionHeader
        eyebrow="Trust signals"
        title={
          <>
            Clarity, discipline, and <span className="text-gradient">transferable systems thinking.</span>
          </>
        }
        body="Not a list of effort, but the kind of engineering behaviour that reduces confusion and risk."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {METRICS.map((metric) => (
          <div key={metric.label} className="card reveal p-7">
            <p className="text-4xl font-semibold tracking-tight text-white">{metric.value}</p>
            <h3 className="mt-3 font-medium text-cyan-200">{metric.label}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">{metric.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <figure key={testimonial.quote} className="card reveal flex flex-col justify-between p-7">
            <Quote size={22} aria-hidden="true" className="text-violet-300/70" />
            <blockquote className="mt-4 text-pretty text-lg leading-8 text-neutral-200">
              {testimonial.quote}
            </blockquote>
            {testimonial.author ? (
              <figcaption className="mt-6 border-t border-white/[0.06] pt-4 text-sm">
                {testimonial.source ? (
                  <a
                    href={testimonial.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-cyan-200"
                  >
                    {testimonial.author}
                  </a>
                ) : (
                  <span className="font-semibold text-white">{testimonial.author}</span>
                )}
                {testimonial.role ? (
                  <span className="block text-neutral-500">{testimonial.role}</span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
