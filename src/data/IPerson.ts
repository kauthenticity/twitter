export type IPerson = {
  _id: string
  id: string
  createdDate: Date
  modifiedDate: Date
  name: string
  email: string
  avatar: string
  image: string
  comments: string
  counts: {
    comment: number
    retweet: number
    heart: number
  }
}

export type Counts = {
  comment: number
  retweet: number
  heart: number
}
