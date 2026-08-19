export default function Stats() {
  const stats = [
    { label: "Yearly Experience", value: "15+" },
    { label: "Properties", value: "500+" },
    { label: "Clients", value: "200+" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="bg-gray-50 py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
