
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'January', books: 30 },
  { month: 'February', books: 45 },
  { month: 'March', books: 50 },
  { month: 'April', books: 70 },
  { month: 'May', books: 90 },
  { month: 'June', books: 65 },
  { month: 'July', books: 80 },
];

const BooksQuantityChart = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl p-4 bg-white rounded">
        <h2 className="text-2xl font-semibold text-center mb-6">Books Quantity In Last 7 Months</h2>
        <ResponsiveContainer width="100%" height={330}>
          <AreaChart data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"/>
            <YAxis  />
            <Tooltip />
            <Area type="monotone" dataKey="books" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BooksQuantityChart;
