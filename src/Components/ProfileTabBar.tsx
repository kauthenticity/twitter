import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs'
import {lightblue, black, darkgray} from '../theme'
import {Animated} from 'react-native'
import Tab from './ProfileTabBarItem'

type Route = {
  key: string
  name: string
  params?: object | undefined
}

const Container = styled.View`
  margin-top: 16px;
`

const BottomLine = styled.View`
  background-color: ${lightblue};
  height: 3px;
  border-radius: 1.5px;
  width: 100%;
`

const TabWrapper = styled.View`
  padding-horizontal: 12px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-left: 4px;
`

export default function TabBar({state, descriptors, navigation}: MaterialTopTabBarProps) {
  const [translateValue] = useState(new Animated.Value(0))
  const [width, setWidth] = useState(0)
  const [toValue, setToValue] = useState(0)

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start()
  }, [state, translateValue, toValue])

  return (
    <Container>
      <TabWrapper>
        {state.routes.map((route: Route, index: number) => {
          const label = route.name
          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }
          return <Tab isFocused={isFocused} key={`tab_${index}`} label={label} onPress={onPress} setToValue={setToValue} setWidth={setWidth} />
        })}
      </TabWrapper>
      <BottomLine
        as={Animated.View}
        style={{
          transform: [{translateX: translateValue}],
          width,
        }}
      />
    </Container>
  )
}
