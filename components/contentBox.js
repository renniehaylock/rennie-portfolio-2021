import chroma from 'chroma-js'
import Link from 'next/link'
import { Heading, Text } from './typography'

export default function ContentBox({ title, description, link, color, textColor }) {
  return (
    <Link href={link}>
      <a target="_blank" className="content-box">
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
          border-radius: 6px;
          background-color: ${chroma(color).alpha(0.05)};
        }`}</style>
      </a>
    </Link>
  )
}
