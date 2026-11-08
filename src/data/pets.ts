export type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  adopted: boolean;
  age: number;
  intakeDate: Date;
  adoptionDate?: Date;
  medicalRecord: {
    vaccinations: string[];
    weight: number;
    microchipId: string | null;
  };
  photo: string;
};

export const pets: Pet[] = [
  {
    id: 1,
    name: "Guts",
    species: "cat",
    breed: "Bombay",
    adopted: true,
    age: 7,
    intakeDate: new Date("2022-01-15"),
    medicalRecord: {
      vaccinations: ["rabies", "feline distemper"],
      weight: 4.5,
      microchipId: null,
    },
    photo: "https://example.com/images/guts.jpg",
  },
  {
    id: 2,
    name: "Beagle",
    species: "dog",
    breed: "Beagle",
    adopted: false,
    age: 1,
    intakeDate: new Date("2022-01-15"),
    medicalRecord: {
      vaccinations: ["rabies", "feline distemper"],
      weight: 4.5,
      microchipId: null,
    },
    photo: "https://example.com/images/guts.jpg",
  },
  {
    id: 3,
    name: "Parrot",
    species: "bird",
    breed: "Blue jay",
    adopted: true,
    age: 5,
    intakeDate: new Date("2022-01-15"),
    medicalRecord: {
      vaccinations: ["rabies", "feline distemper"],
      weight: 4.5,
      microchipId: null,
    },
    photo: "https://example.com/images/guts.jpg",
  }
];
