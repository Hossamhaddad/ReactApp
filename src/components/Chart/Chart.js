import './Chart.css'

const Chart=(probs)=>{
<div className='chart'>
{probs.dataPoints.map(dataPoint=>{
<ChartBar  
key={dataPoint.label}
value={dataPoint.value} 
maxValue={null}  
label={dataPoint.label}  
/>
})}

</div>
}
 export default Chart;