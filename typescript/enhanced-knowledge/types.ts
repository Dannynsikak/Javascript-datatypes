type Meter = number;
type UserInput = string;
type Maybe = boolean;

type LoginInput = {
  email: string;
  username: string;
  id: number;
};

// union type
type LoginInputB = {
  email: string | undefined;
  username?: string;
  id: number;
};
