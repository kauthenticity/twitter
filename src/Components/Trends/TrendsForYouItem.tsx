import React, {useMemo} from 'react'
import styled from 'styled-components/native'
import type {ITrends} from '../../data/ITrends'
import ViewMore from '../Icons/ViewMore'

type TrendsForYouItemProps = {
  trend: ITrends
}

const TrendsForYouItem = ({trend}: TrendsForYouItemProps) => {
  const formattedTweets = useMemo(() => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g
    return trend.tweets?.toString().replace(regexp, ',')
  }, [])
  return (
    <Container>
      <Top>
        <Location>Trending in {trend.location}</Location>
        <ViewMore />
      </Top>
      <Middle>
        <Keyword>{trend.keyword}</Keyword>
      </Middle>
      <Bottom>
        <Tweets>{formattedTweets ? formattedTweets + ' Tweets' : ''}</Tweets>
      </Bottom>
    </Container>
  )
}

export default TrendsForYouItem
const Tweets = styled.Text`
  color: #6f7d89;
  font-size: 13px;
`

const Keyword = styled.Text`
  font-weight: 700;
`

const Location = styled.Text`
  color: #6f7d89;
  font-weight: 700;
  font-size: 13px;
`

const Container = styled.View``

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const Middle = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`
const Bottom = styled.View`
  margin-bottom: 20px;
`
