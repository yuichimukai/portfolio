import styled from 'styled-components'
import { TwitterShareButton } from './TwitterShareButton'

type Props = {
  articleId: string
}

export const SnsShareButtonList: React.VFC<Props> = (props) => {
  const { articleId } = props
  return (
    <ShareButtonListBase>
      <ShareButtonListItem>
        <TwitterShareButton articleId={articleId}/>
      </ShareButtonListItem>
    </ShareButtonListBase>
  )
}

const ShareButtonListBase = styled.ul`
  margin: 0;
  padding: 0;
`

const ShareButtonListItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
`