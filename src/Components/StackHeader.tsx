import React, {useCallback} from 'react'
import {StackHeaderProps} from '@react-navigation/stack'
import styled from 'styled-components/native'
import {SafeAreaView, TouchableOpacity} from 'react-native'
import {getHeaderTitle} from '@react-navigation/elements'
import LeftArrowIcon from '../Assets/Icons/leftarrow.svg'
import MoreIcon from '../Assets/Icons/more.svg'
import {useNavigation} from '@react-navigation/native'

const ICON_SIZE = 24

type StackHeaderType = {children: React.ReactNode; title: string}

const StackHeader = ({children, title}: StackHeaderType) => {
  const navigation = useNavigation()
  const onPressGoback = useCallback(() => navigation.goBack(), [])
  return (
    <Header>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={onPressGoback}>
          <LeftArrowIcon width={ICON_SIZE} height={ICON_SIZE} fill="#000" />
        </TouchableOpacity>
      )}

      <Title>{title}</Title>
      {children}
    </Header>
  )
}

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
  height: 40px;
`

const Title = styled.Text`
  font-weight: 800;
  font-size: 16px;
`

export default StackHeader
