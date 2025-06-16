import { useState } from "react";
import PageHeader from "../components/PageHeader";

const courses = [
  {
    title: "Nike",
    stocks: "35 stocks",
    progress: 75,
    color: "bg-blue-500",
    image:
      "https://storage.googleapis.com/a1aa/image/9586fbc0-46c9-4121-f466-181899c3bb4a.jpg",
    circleColor: "#2563eb",
  },
  {
    title: "Adidas",
    stocks: "30 stocks",
    progress: 50,
    color: "bg-orange-400",
    image:
      "https://storage.googleapis.com/a1aa/image/eeb066f8-2c44-40cf-002f-b6686e4c0fcc.jpg",
    circleColor: "#fb923c",
  },
  {
    title: "Uniqlo",
    stocks: "20 stocks",
    progress: 25,
    color: "bg-green-500",
    image:
      "https://storage.googleapis.com/a1aa/image/51f92106-70a4-4e42-7f75-79e9030bd152.jpg",
    circleColor: "#4ade80",
  },
  {
    title: "Erigo",
    stocks: "40 stocks",
    progress: 75,
    color: "bg-yellow-300 text-gray-900",
    image:
      "https://storage.googleapis.com/a1aa/image/3d3be8e7-b608-463e-91e4-615d8c7ad08d.jpg",
    circleColor: "#fde68a",
  },
];

const CourseCard = ({
  title,
  stocks,
  progress,
  color,
  image,
  circleColor,
}) => {
  const offset = 100.53 - (progress / 100) * 100.53;

  return (
    <div className={`relative rounded-xl ${color} p-6 shadow-lg overflow-hidden`}>
      <div>
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-xs mb-4">{stocks}</p>
        <div className="w-12 h-12 mb-2 relative">
          <svg className="w-12 h-12" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="white"
              strokeDasharray="100.53"
              strokeDashoffset={offset}
              strokeLinecap="round"
              strokeWidth="3"
              transform="rotate(-90 18 18)"
            />
            <text
              x="18"
              y="21"
              textAnchor="middle"
              fontSize="8"
              fill="white"
              fontWeight="bold"
            >
              {progress}%
            </text>
          </svg>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="absolute bottom-4 right-4 w-20 object-contain opacity-80"
        style={{ maxHeight: "120px" }}
      />
      <svg
        className="absolute bottom-0 right-0 w-40 h-40 opacity-20"
        viewBox="0 0 160 160"
      >
        <circle cx="80" cy="80" r="80" fill={circleColor} />
      </svg>
    </div>
  );
};

const activityData = {
  day: [
    { day: "Mon", value: 5 },
    { day: "Tue", value: 10 },
    { day: "Wed", value: 3 },
    { day: "Thu", value: 8 },
    { day: "Fri", value: 6 },
    { day: "Sat", value: 9 },
    { day: "Sun", value: 4 },
  ],
  week: [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 28 },
    { day: "Wed", value: 16 },
    { day: "Thu", value: 40 },
    { day: "Fri", value: 24 },
    { day: "Sat", value: 32 },
    { day: "Sun", value: 28 },
  ],
  month: [
    { day: "W1", value: 70 },
    { day: "W2", value: 80 },
    { day: "W3", value: 55 },
    { day: "W4", value: 95 },
    { day: "W5", value: 60 },
    { day: "W6", value: 72 },
    { day: "W7", value: 85 },
  ],
};

const WeeklyActivity = () => {
  const [selectedRange, setSelectedRange] = useState("week");
  const [hoveredBar, setHoveredBar] = useState(null);

  const maxHeight = 160;
  const data = activityData[selectedRange];
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <section className="max-w-6xl mx-auto mt-10">
      <h2 className="font-semibold text-lg mb-4">Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[{ label: "Delivery\nCompleted", value1: "1", value2: "02" },
          { label: "Member\nGained", value1: "1", value2: "250" },
          { label: "Delivery\nIn Progress", value1: "1", value2: "03" },
          { label: "Total\nTransaction", value1: "1", value2: "05" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-blue-100 rounded-xl p-4">
            <p className="text-blue-400 text-sm mb-6 leading-snug whitespace-pre-line">
              {stat.label}
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-blue-500 text-3xl font-light">{stat.value1}</span>
              <span className="text-blue-600 text-3xl font-light">{stat.value2}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-lg mb-2 flex items-center justify-between">
        Activity
        <div className="text-xs font-normal text-blue-300 space-x-4">
          {["day", "week", "month"].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`${
                selectedRange === range ? "text-blue-500 font-semibold" : "text-gray-400"
              } capitalize`}
            >
              {range}
            </button>
          ))}
        </div>
      </h2>

      <div className="flex items-end justify-between mt-6 px-2 sm:px-0">
        {data.map((item, idx) => {
          const height = Math.round((item.value / maxValue) * maxHeight);
          return (
            <div
              key={idx}
              className="flex flex-col items-center group relative w-full max-w-[32px]"
              onMouseEnter={() => setHoveredBar(idx)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {hoveredBar === idx && (
                <div className="absolute -top-6 text-xs bg-white shadow px-2 py-1 rounded text-gray-700">
                  {item.value}
                </div>
              )}
              <div
                className={`w-full rounded-full bg-blue-500`}
                style={{ height: `${height}px`, transition: "height 0.3s ease" }}
              ></div>
              <span className="text-xs text-gray-900 mt-2">{item.day}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader />

      {/* My Courses */}
      <section className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Stock <span className="font-bold"></span>
          </h1>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>

      {/* Statistics + Weekly Activity */}
      <WeeklyActivity />

      {/* Revenue Section */}
      <section className="max-w-6xl mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-4xl font-bold text-yellow-500">Rp. -</p>
        </div>
      </section>
    </div>
  );
}
