import {randomImage} from './faker'

export type ListItemType = {
  listImageUri: string
  profileImgUri: string
  listName: string
  listDescription: string
  listOwnerId: string
  listOwnerName: string
  followed: boolean
}

export const pinnedLists: ListItemType[] = []

export const newLists: ListItemType[] = [
  {
    listImageUri: randomImage(),
    profileImgUri: randomImage(),
    listName: 'Korean Peninsula',
    listDescription: 'news, politics, reporters, and experts in analysis of the Korean region',
    listOwnerId: 'ladyquixotic',
    listOwnerName: 'Madhura Prasad',
    followed: true,
  },
  {
    listImageUri: randomImage(),
    profileImgUri: randomImage(),
    listName: 'pict📸',
    listDescription: '',
    listOwnerId: 'cloudgoogie',
    listOwnerName: 'jeosapir (slow)',
    followed: false,
  },
  {
    listImageUri: randomImage(),
    profileImgUri: randomImage(),
    listName: 'Kocheng🐱',
    listDescription: 'meow meow..',
    listOwnerId: 'noveliabtn',
    listOwnerName: 'n.',
    followed: false,
  },
]

export const myLists: ListItemType[] = []
