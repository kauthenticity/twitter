import type {IHappening} from './IHappening'
import * as F from './faker'
const happenings: IHappening[] = [
  {
    category: 'Cricket',
    description: 'IPL 2022: Chennai Super Kings face Delhi Capitals in Navi Mumbai',
    uri: F.randomImage(),
  },
  {
    category: 'Entertainment',
    description: 'Fans wish Stephen Amell a happy birthday 🍰',
    uri: F.randomImage(),
  },
  {
    category: 'Sports',
    description: "Fans celebrate to Shirai's birthday",
    uri: F.randomImage(),
  },
  {
    category: 'Soccer',
    description: 'Ghana Premier League',
    uri: F.randomImage(),
  },
  {
    category: 'Sports',
    description: "It's Kemba Walker's birthday 🎉",
    uri: F.randomImage(),
  },
  {
    category: 'AMVCAs',
    description: "Africa Magic Viewer's choice Awards 2022 kicks off in Lagos",
    uri: F.randomImage(),
  },
  {
    category: 'Cricket',
    description: 'IPL 2022: Royal Challengers beat SunRisers by 67 runs',
    uri: F.randomImage(),
  },
]

const trendsSection = [
  {
    title: "What's happening",
    data: happenings,
  },
]

export default trendsSection
