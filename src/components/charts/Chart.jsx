import {  useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,Tooltip } from 'recharts';
import { getLocalData } from '../../utils/utils';
import { useLoaderData } from 'react-router-dom';
import ReadNotFound from '../Pages/ReadNotFound';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  
const Chart = () => {

    const [data,setData] = useState([]);
    const loadData = useLoaderData()

    useEffect(()=>{
        const localData = getLocalData();
        if (loadData.length >0) {
            const books =loadData.filter(book => localData.includes(book.id))
            setData(books)
        }
    },[])

    return (
        <div className='container mx-auto'>
            
            {
                data.length == 0 ? <ReadNotFound></ReadNotFound> : null
            }

         <div className='w-full pb-4'>
         <BarChart
                width={1100}
                height={700}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book_name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
             </BarChart>
         </div>
        </div>
    );
};

Chart.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
export default Chart;