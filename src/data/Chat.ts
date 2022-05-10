import type {IChat} from './IChat'
import * as F from './faker'
const Chats: IChat[] = [
  {
    friendName: '진실츄',
    friendId: 'forclonecoding',
    chats: [
      {
        talkMe: false,
        message: '하이하이',
        timestamp: new Date('2022-05-12'),
      },
    ],
    profileUri: F.randomImage(),
  },
]

export default Chats
