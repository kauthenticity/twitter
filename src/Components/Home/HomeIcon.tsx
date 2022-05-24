import React, {useCallback, useState} from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity, View, Text} from 'react-native'
import * as D from '../../data'
import BottomSheet from './BottomSheet'
import HomeBottomSheet from './HomeBottomSheet'

import CommentIcon from '../../Assets/Icons/comment.svg'
import LikeIcon from '../../Assets/Icons/like.svg'
import RetweetIcon from '../../Assets/Icons/retweet.svg'
import ShareIcon from '../../Assets/Icons/share.svg'

type HomeIconProps = {
  counts: D.Counts
  person: D.IPerson
}

const IconSize = 16
const fill = '#3d3d3d'
const HomeIcon = ({person, counts}: HomeIconProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const pressButton = useCallback(() => {
    setModalVisible(visible => !visible)
  }, [])
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
        <TouchableOpacity onPress={pressButton}>
          <ShareIcon width={IconSize} height={IconSize} fill={fill} />
        </TouchableOpacity>
        <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible} person={person}></BottomSheet>
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
