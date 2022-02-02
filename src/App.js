import "./index.css";
import {useState} from "react";
import reactDom from "react-dom";

export default function App() {
  const members = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
      name: "JAI BHIM ",
      summary:"A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.",
      Producers: "Suriya, Jyothika",
      Inirelease: '2 November 2021',
      Director: 'TJ Gnanavel',
      rating:"⭐⭐⭐⭐4.5"
    },
    {
      img: "https://data1.ibtimes.co.in/en/full/592822/irudhi-suttru.jpg",
      name: "IRUDHI SUTTRU ",
      summary:"Prabhu Selvaraj, a boxer, is ignored by the boxing association. He tries to accomplish his dream by training Madhi, an amateur fighter.",
      Producers: " S. Sashikanth; C. V. Kumar (Tamil)",
      Inirelease: '29 January 2016',
      Director: 'Sudha Kongara Prasad',
      rating:"⭐⭐⭐⭐4.5"
    },
    {
      img: "https://external-preview.redd.it/SRZ8cKkDxCN2uIC66I6ZunP7bk4SNVBiF8W_3gNVd60.jpg?auto=webp&s=9cc99cf8e2a44398802224ba19fe4b90b43df042",
      name: "PIRATES OF THE CARIBBEAN ",
      summary:"Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.",
      Producers: "Jerry Bruckheimer",
      Inirelease: '15 August 2003',
      Director: 'Gore Verbinski, Joachim Rønning, Espen Sandberg, Rob Marshall',
      rating:"⭐⭐⭐⭐4.9"
    },
    {
      img: "https://akamaividz2.zee5.com/image/upload/w_630,h_945,c_scale,f_auto,q_auto/resources/0-0-sanamterikasam/portrait/sanamterikasam1920x770.jpg",
      name: "SANAM TERI KASAM",
      summary:"When Saraswati's father throws her out of the house, Inder stands with her against all odds and this brings them close to each other. However, destiny has its own plans to separate them.",
      Producers: "Deepak Mukut",
      Inirelease: '5 February 2016',
      Director: 'Radhika Rao, Vinay Sapru',
      rating:"⭐⭐⭐⭐4.9"
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzJhNjMyOGMtYjhiYy00ZTAwLThmZWUtZmE5NzI3OTk4Y2M4XkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_.jpg",
      name: "PREMAM",
      summary:"While George's first love turns out to be a disappointment, Malar, a college lecturer, rekindles his love interest. His romantic journey takes him through several stages, helping him find his purpose.",
      Producers: "Suriya, Jyothika",
      Inirelease: ' 29 May 2015',
      Director: 'Alphonse Puthren',
      rating:"⭐⭐⭐⭐4.7"
    }

  ];
 
  return (
    <div className="App">
      
      {members.map((mem) => (
        <Movie name={mem.name} img={mem.img} summary={mem.summary} 
        Producers={mem.Producers} Inirelease={mem.Inirelease}  Director={mem.Director} rating={mem.rating}/>
      ))}
      ;
    </div>
  );
}

function Movie({ name, img ,summary,Producers,rating,Inirelease,Director}) {
  const style={
    color: rating > 4.6 ? "green" : "red",
  }
    return (
    <div className="container">
      <h1>Listing Movies⭐</h1>
      <div className="align">
      <div className="flex">
      <div className="first">
      <img src={img} alt="Movie Poster" className="img"/>
      </div>
      <div className="second">
      <h1 className="name"><span className="span"><b>Movie</b></span>: {name}</h1><br></br>
      <h3><span><b>Summary</b></span>: {summary}</h3><br></br>
      <h3><span><b>Producers</b></span>: {Producers}</h3><br></br>
      <h3><span><b>Initial Release</b></span>:{Inirelease}</h3><br></br>
      <h3><span><b>Director</b></span>:{Director}</h3><br></br>
      <h3 style={style}><span><b>Ratings</b></span>: {rating}</h3>
       </div>
      </div>
      <Counter/>
      <Unlike/>
      </div>
    </div>
  );
}

function Counter(){
  const [like,setLike]=useState(0);
  return (
    <div>
      <button onClick={()=>{
          setLike(like+1);
        }}>
        👍{like}
      </button>
    </div>
  );
}

function Unlike(){
  const [like,setLike]=useState(0);
  return (<div>
    <button onClick={()=>{
    setLike(like+1);
    }}>👎{like}</button>
  </div>
  );
}

