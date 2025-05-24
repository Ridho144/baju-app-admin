import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import PageHeader from "../components/PageHeader";

const data = [
    { name: 'Orders', value: 75 },
    { name: 'Delivered', value: 175 },
    { name: 'Canceled', value: 40 },
];

const COLORS = ['#10B981', '#3B82F6', '#EF4444']; // green, blue, red

const revenueData = [
    { name: 'Revenue', value: 128 },
];

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-6">
            <PageHeader />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Bar Chart */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-semibold mb-4">Order Statistics</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-semibold mb-4">Order Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Revenue section */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-4">Total Revenue</h2>
                <p className="text-3xl font-bold text-yellow-500">Rp. 128</p>
            </div>
        </div>
    );
}
