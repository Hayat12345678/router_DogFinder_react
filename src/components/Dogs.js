import React from "react";
import { Link, useParams } from "react-router-dom";
import HazelPhoto from "../images/hazel.jpg";
import TubbyPhoto from "../images/tubby.jpg";
import WhiskeyPhoto from "../images/whiskey.jpg";
import "./Dogs.css";

export default function Dogs() {
  let params = useParams(); 
  const dogInfos = [
    {
      name: "Whiskey",
      age: 3,
      image: WhiskeyPhoto,
      facts: ['Whiskey loves eating popcom.',
      'Whiskey is a terrible guard dog.',
       'Whiskey wants to cuddle with you!'
  ],
 },
    {
      name: "Hazel",
      age: 0,
      image: HazelPhoto,
      facts:["Hazelhas soooo much energy!",
      " Hazel is highly intelligent." ,
      "hazel loves people more than dogs."
    ],
  }, 
    {
      name: "Tubby",
      age: 3,
      image: TubbyPhoto,
      facts: ['Tubby is really stupid.',
      'Tubby does not like walks.',
       'Angelina hates Tubby.'
      ],
 },
  ];

  const showDog = dogInfos.find((dog) => dog.name === params.dogsname);
  return (
    <>
      <main>
      <h1>HELLO. WE HAVE DOGS. CLICK ON THEM FOR MOR INFO.</h1>
        <div className="container">
          {dogInfos.map((dog, index) => (
            <div
              key={"dog-" + index}
              className={showDog && dog.name !== params.dogsname
                  ? "inactive"
                  : undefined
              }
            >
              <img className="dogPhoto" src={dog.image} alt="Dogphoto"/>
              <p className="dogName">
                <Link to={"/dogs/" + dog.name}>{dog.name}</Link>
              </p>
            </div>
          ))}
        </div>
      </main>
      {params.dogsname ? (
        <footer>
          
          <h2>Dogs-Info:</h2>
          <p>
            <strong>name:</strong> {showDog.name}
          </p>
          <p>
            <strong>Age:</strong> {showDog.age}
          </p>
          <p>
            <strong>facts:</strong>
          </p>
          <ul>
            {showDog.facts.map((fact, index) => {
              return <li key={"dogsfact-" + index}>{fact}</li>;
            })}
          </ul>
        </footer>
      ) : undefined}
    </>
  );
}

