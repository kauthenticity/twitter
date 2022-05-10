export type IChatItem = {
  talkMe: boolean
  message: string
  timestamp: Date
}

export type IChat = {
  friendName: string
  friendId: string
  profileUri: string
  chats: IChatItem[]
}
