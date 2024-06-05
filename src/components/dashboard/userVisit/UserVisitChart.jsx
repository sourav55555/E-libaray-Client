
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Monday', visits: 120 },
  { day: 'Tuesday', visits: 200 },
  { day: 'Wednesday', visits: 150 },
  { day: 'Thursday', visits: 80 },
  { day: 'Friday', visits: 170 },
  { day: 'Saturday', visits: 220 },
  { day: 'Sunday', visits: 130 },
];

const UserVisitChart = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl p-4 bg-white rounded">
        <h2 className="text-2xl font-semibold text-center mb-6">User Chart For Last 7 Days</h2>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserVisitChart;