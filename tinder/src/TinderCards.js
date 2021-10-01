import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Jerome l'assiette",
      url: "https://www.assiettesetcompagnie.com/wp-content/uploads/2020/11/saladier-pays-basque-par-assiettesetcompagnie-720x720.jpg",
      desc: "Une assiete ne parle pas et ne parlera jamais Marc...",
    },
    {
      name: "Tony the Tiger",
      url: "https://pbs.twimg.com/profile_images/1164555358939045888/uZ9jx9-r_400x400.jpg",
      desc: "Hey guys, eat my frosted flakes",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <div className="card__text">
                <h1>{person.name}</h1>
                <h3>{person.desc}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
