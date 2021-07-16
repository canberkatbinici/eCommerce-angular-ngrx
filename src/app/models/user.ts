export interface UserInfo{
  id: number;
  username: string;
  email: string;
  token?: string;

}

export interface User extends UserInfo {
  firstName: string;
  lastName: string;
  number: string;
  password: string;
  gender: string;
  token?: string;
  address:adress[];


}

export interface adress {
  id : number,
  name: string,
  firstname: string,
  surname: string,
  country: string,
  city: string,
  district: string;
  neighborhood: string;
  addressLine: string,
  phone: string,
  zipCode: string,
  additional?: string
}


// address:{
// name: string,
//   surname: string,
//   country: string,
//   city: string,
//   addressLine: string
//   phone: string,
//     zipCode: string,
//     additional?: string
// };
