export type Doctors = Info[]

export type Rol = 1 | 2

export interface Info {
  id: number
  gender: gender
  name: string
  lastname: string
  category_Id: number
  specialty: string
  img: string
  rating: number
}

export type gender = "male" | "female"