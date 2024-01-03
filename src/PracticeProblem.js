function PracticeProblem(){
    const city=[
        {
            name:"Rajkot",
            boolean:false,
        },
        {
            name:"Gandhinagar",
            boolean:true,
        },
        {
            name:"Ahmedabad",
            boolean:false,
        }
    ];
    return (
        <div>
            {city.map((value)=>{
                return (value.boolean===true)? <h1 style={{color:"green"}}>{value.name}</h1>: <h1 style={{color:'red'}}>{value.name}</h1> 
            })}
        </div>
    )
}
export default PracticeProblem;