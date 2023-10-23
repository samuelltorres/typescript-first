type User = {
  id?: number;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

const user: User = {
  id: 1,
  username: 'samuelltorres',
  password: 'typescript123',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Tipo PARTIAL
type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  password: 'carrarinha'
}


// Tipo OMIT
type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

const newUser: NewUser = {
  username: 'augustinhocarrara',
  password: 'typescript123'
}


// Tipo PICK
type SearchUser = Pick<User, 'username'>

const searchUser: SearchUser = {
  username: 'augustinhucarrara'
}

