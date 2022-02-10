import "./index.css";
export default function App() {
  const pricingtble=[{
    name:"FREE",
    symbol:"$0/month",
    content:"✔ Single User",
    a:"✔ 5GB Storage",
    b:"✔ Unlimited Public Projects",
    c:"✔ Community Access",
    d:"✖ Unlimited Private Projects",
    e:"✖ Dedicated Phone Support",
    f:"✖ Free Subdomain",
    g:"✖ Monthly Status Reports"
  },{
    name:"FREE",
    symbol:"$0/month",
    content:"✔ Single User",
    a:"✔ 5GB Storage",
    b:"✔ Unlimited Public Projects",
    c:"✔ Community Access",
    d:"✖ Unlimited Private Projects",
    e:"✖ Dedicated Phone Support",
    f:"✖ Free Subdomain",
    g:"✖ Monthly Status Reports"
  },{
    name:"FREE",
    symbol:"$0/month",
    content:"✔ Single User",
    a:"✔ 5GB Storage",
    b:"✔ Unlimited Public Projects",
    c:"✔ Community Access",
    d:"✖ Unlimited Private Projects",
    e:"✖ Dedicated Phone Support",
    f:"✖ Free Subdomain",
    g:"✖ Monthly Status Reports"
  }];
return (
  <div className="App">
    <h1 className="h1">Price Cart</h1>
 {pricingtble.map((item)=>(
  <Pricingtble name={item.name} symbol={item.symbol} content={item.content} 
  a={item.a} b={item.b} c={item.c} 
  d={item.d} e={item.e} f={item.f} g={item.g}/>
)
)}; 

  </div>
);

}

function Pricingtble({name,symbol,content,a,b,c,d,e,f,g}) {
  return (
    
    <div className="flex">
    <div className="Container">
      <div className="card">
      <h5>{name}</h5>
      <h1>{symbol}</h1>
      <h3>{content}</h3>
      <h3>{a}</h3>
      <h3>{b}</h3>
      <h3>{c}</h3>
      <h3>{d}</h3>
      <h3>{e}</h3>
      <h3>{f}</h3>
      <h3>{g}</h3>
      <Button/>
      </div>
    </div>
  </div>

    
  );
}
function Button(){
  return (
    <div className="div">
      <button  className="button"onClick={()=>{}}>Button</button>
    </div>
  )
}