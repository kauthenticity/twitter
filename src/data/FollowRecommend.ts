import type {IFollowRecommend} from './IFollowRecommend'
import {randomImage} from './faker'
const followRecommends: IFollowRecommend[] = [
  {
    name: '몽세리',
    id: 'mongseri',
    badge: false,
    profileUri: randomImage(),
  },
  {
    name: 'Elon Musk',
    id: 'elonmusk',
    badge: true,
    profileUri: randomImage(),
  },
  {
    name: '유용한 정보 저장계',
    id: 'wildcatclub_',
    bio: '유용한 팁을 저장, 백업합니다',
    badge: false,
    profileUri: randomImage(),
  },
]

const trendsSection = [
  {
    title: 'Who to follow',
    data: followRecommends,
  },
]

export default trendsSection
