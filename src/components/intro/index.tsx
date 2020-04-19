import React from 'react'
import { Intro as IntroStyled, Paragraph, Highlight } from './intro.styled'
import List from '@components/list'

// export default function Intro() {
//   return (
//     <IntroStyled>
//       <h1> Hey </h1>
//       <Paragraph>
//         I'm <b> Daniel Pineda </b> a <Highlight>Full Stack</Highlight> Developer
//         with 6+ years of experience from Guatemala
//       </Paragraph>
//       <h1> I do </h1>
//       <List.Ul inline={true} separator="/">
//         <List.Li> React </List.Li>
//         <List.Li> vue </List.Li>
//         <List.Li> elixir </List.Li>
//         <List.Li> node </List.Li>
//       </List.Ul>
//     </IntroStyled>
//   )
// }

export default IntroStyled

export { Paragraph, Highlight }
