import './ChartBar.css'

const ChartBar=(probs)=>{

let barFillHeight='0%';

if(probs.max>0){
    barFillHeight=Math.round((probs.value/probs.max)*100)+'%';
}

    return(
   <div className='chart-bar'>
  <div className='chart-bar__inner'>
<div className='chart-bar__fill' style={{height:barFillHeight}}>
</div>

  </div>
<div className='chart-bar__label'  >{probs.label}</div>


   </div>

    )
};
export default ChartBar;