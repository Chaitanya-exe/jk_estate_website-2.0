const heroImage =
  "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=2000";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#2b0808] sm:min-h-[850px]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#2b0808]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2b0808] via-[#2b0808]/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2b0808] via-transparent to-[#2b0808]/25" />
      </div>

      <div className="container-shell relative z-10 flex min-h-[760px] items-start pt-24 pb-20 sm:min-h-[850px] sm:pb-24">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_390px]">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e7a1a1]" />
              Commercial real estate, redefined
            </div>

            <h1 className="font-display text-[clamp(3.7rem,8vw,7.8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white">
              Find the space
              <span className="block text-[#e7a1a1]">
                behind your next move.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Premium commercial real estate solutions for businesses,
              investors, and ambitious teams looking for spaces with
              long-term potential.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#properties" className="button button-light">
                Explore properties
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="button border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/15 button-light"
              >
                Book a consultation
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="glass-strong rounded-[28px] p-6 sm:p-7">
            <div className="flex items-center justify-between border-b border-[#450A0A]/10 pb-5">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#756464]">
                Current focus
              </span>

              <span className="rounded-full bg-[#fdf0f0] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-[#991B1B]">
                2026
              </span>
            </div>

            <div className="py-6">
              <p className="font-display text-3xl leading-tight tracking-[-0.03em] text-[#450A0A]">
                Spaces built around how modern businesses actually work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#450A0A] p-4 text-white">
                <strong className="font-display text-2xl font-medium">
                  500+
                </strong>

                <span className="mt-1 block text-[0.63rem] uppercase tracking-wider text-white/55">
                  Properties
                </span>
              </div>

              <div className="rounded-2xl bg-white/70 p-4">
                <strong className="font-display text-2xl font-medium text-[#450A0A]">
                  98%
                </strong>

                <span className="mt-1 block text-[0.63rem] uppercase tracking-wider text-[#756464]">
                  Success rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}