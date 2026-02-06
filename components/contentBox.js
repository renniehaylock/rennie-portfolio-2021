import chroma from 'chroma-js'
import Link from 'next/link'
import { Heading, Text } from './typography'

export default function ContentBox({ title, description, link, color, textColor, bgOpacity = 0.05 }) {
  return (
    <Link href={link} target="_blank">
      <div className="content-box">
        <Heading medium color={color}>
          {title}
        </Heading>
        <Text medium color={textColor}>
          {description}
        </Text>
        <style jsx>{`
        .content-box {
          width: 100%;
          padding: 10px 20px 15px 20px;
          border-radius: 12px;
          background-color: ${chroma(color).alpha(bgOpacity)};
        }`}</style>
      </div>
    </Link>
  )
}
