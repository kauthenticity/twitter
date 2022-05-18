import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {darkgray, black} from '../theme'

interface ITab {
  isFocused: boolean
  label: string
  onPress: () => void
  setToValue: (params: number) => void
  setWidth: (params: number) => void
}

const TabButton = styled.TouchableOpacity<{isFocused: boolean}>`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0 8px;
`

const TabText = styled.Text<{isFocused: boolean}>`
  font-weight: 700;
  color: ${props => (props.isFocused ? black : darkgray)};
`

export default function Tab({isFocused, label, onPress, setToValue, setWidth}: ITab) {
  const [layout, setLayout] = useState<any>(null)
  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x)
      setWidth(layout.width)
    }
  }, [isFocused, layout, setToValue, setWidth])

  const onLayout = (e: any) => {
    const {x, width} = e.nativeEvent.layout
    setLayout({x, width})
  }

  return (
    <TabButton isFocused={isFocused} onPress={onPress} onLayout={onLayout}>
      <TabText isFocused={isFocused}>{label}</TabText>
    </TabButton>
  )
}
