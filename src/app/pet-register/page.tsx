import React, { useState } from "react";

interface PetRegisterFormProps {
  name: string;
  age: number;
  breed: string;
  healthStatus: string;
  moodStatus: string;
  refAddress: string;
  moreInfo: string;
}

const PetRegisterForm: React.FC<PetRegisterFormProps> = ({
  name,
  age,
  breed,
}) => {
  const [petName, setPetName] = useState(name);
  const [petAge, setPetAge] = useState(age);
  const [petBreed, setPetBreed] = useState(breed);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted!");
    console.log("Pet Name:", petName);
    console.log("Pet Age:", petAge);
    console.log("Pet Breed:", petBreed);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Pet Name:
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Pet Age:
        <input
          type="number"
          value={petAge}
          onChange={(e) => setPetAge(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Pet Breed:
        <input
          type="text"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register Pet</button>
    </form>
  );
};

export default PetRegisterForm;
