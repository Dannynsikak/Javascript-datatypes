interface Name {
  firstName: string;
  lastName: string;
  middleName: string | undefined;
}

interface Person extends Name {
  status: "single" | "married" | "widowed";
  address: string;
  parents: [Person, Person] | undefined;
}

const person: Person = {
  status: "single",
  address: "",
  parents: undefined,
  middleName: undefined,
  firstName: "",
  lastName: "",
};
