const stats = [
  { label: "Years of experience", value: "15+" },
  { label: "Properties", value: "500+" },
  { label: "Clients served", value: "200+" },
  { label: "Success rate", value: "98%" },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-0 pb-4 pt-20">
      <div className="container-shell">
        <div className="glass-strong rounded-[28px] px-5 py-7 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-4 text-center sm:px-8 ${
                  index < stats.length - 1
                    ? "md:border-r md:border-[#450A0A]/10"
                    : ""
                }`}
              >
                <div className="font-display text-4xl font-medium tracking-[-0.04em] text-[#450A0A] sm:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-2 text-[0.63rem] font-bold uppercase tracking-[0.14em] text-[#756464]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}