import React from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import * as D from '../../data'

import CommentIcon from '../../Assets/Icons/comment.svg'
import LikeIcon from '../../Assets/Icons/like.svg'
import RetweetIcon from '../../Assets/Icons/retweet.svg'
import ShareIcon from '../../Assets/Icons/share.svg'

type HomeIconProps = {
  counts: D.Counts
}

const IconSize = 16
const fill = '#3d3d3d'
const HomeIcon = ({counts}: HomeIconProps) => {
  return (
    <Container>
      <Item>
        <TouchableOpacity>
          <CommentIcon width={IconSize} height={IconSize} fill={fill} />
        </TouchableOpacity>
        <CountText>{counts.comment}</CountText>
      </Item>

      <Item>
        <TouchableOpacity>
          <RetweetIcon width={IconSize} height={IconSize} fill={fill} />
        </TouchableOpacity>
        <CountText>{counts.retweet}</CountText>
      </Item>
      <Item>
        <TouchableOpacity>
          <LikeIcon width={IconSize} height={IconSize} fill={fill} />
        </TouchableOpacity>
        <CountText>{counts.heart}</CountText>
      </Item>
      <Item>
        <TouchableOpacity>
          <ShareIcon width={IconSize} height={IconSize} fill={fill} />
        </TouchableOpacity>
      </Item>
    </Container>
  )
}

export default HomeIcon

const CountText = styled.Text`
  color: #3d3d3d;
  font-size: 12px;
  margin-left: 5px;
`

const Item = styled.View`
  width: 25%;
  flex-direction: row;
  align-items: center;
`

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
