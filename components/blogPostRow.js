import chroma from 'chroma-js'
import Link from 'next/link'
import { Heading, Text } from './typography'

export default function BlogPostRow({ title, description, date, link, color, descriptionColor }) {
  return (
    <Link href={link} target="_blank">
      <div className="blog-post-row">
        <Heading small color={color}>
          {title}
        </Heading>
        <Text small color={descriptionColor || "rgba(255,255,255,0.9)"}>
          {description}
        </Text>
        {date && (
          <Text xsmall color="rgba(255,255,255,0.5)">
            {date}
          </Text>
        )}
        <style jsx>{`
        .blog-post-row {
          width: 100%;
          border-top: 2px solid rgba(255,255,255,0.05);
          padding: 10px 0;
        }`}</style>
      </div>
    </Link>
  )
}
