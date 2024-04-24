export type Doctors = Info[]

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