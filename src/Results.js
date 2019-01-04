import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: "70314776187bbcb072e6ec8c07e6cf6c",
  secret: "8cd79232ce57a5fd9532e25ea66e1279"
});
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      somethingElse: true
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets: pets
        });
      });
  }
  render() {
    return (
      <div className="search">
        <h1>Adopt Me!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={`${pet.contact.city}, ${pet.contact.state}`}
                id={pet.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Results;
