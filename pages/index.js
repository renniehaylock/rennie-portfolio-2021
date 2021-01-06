import Link from 'next/link'
import Head from '../components/head'
import styles from '../styles/Home.module.css'
import { Heading, Text, TopHeader } from '../components/typography'
import ContentBox from '../components/contentBox'
import BlogPostRow from '../components/blogPostRow'

import projects from '../data/projects'
import blogPosts from '../data/blogPosts'
import links from '../data/links'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <div className="header-section">
          <div className="rennie-moji">
            👨‍💻
            <style jsx>{`
            .rennie-moji {
              font-size: 50px;
              margin-bottom: 30px;
            }`}</style>
          </div>
          <TopHeader>Rennie Haylock</TopHeader>
          <Text large>
            Hi! I’m Rennie, a software developer, designer and founder living in Seattle.
            I spend most of my time building <a href="https://huntr.co">Huntr</a>.
            You can see some of my projects below.
            Follow me on <a href="https://twitter.com/RennieHaylock">Twitter</a> or <a href="mailto:renniehaylock@gmail.com">contact me</a>.
          </Text>
        </div>
        <div>
          <Heading large>My Projects</Heading>
          <div className="grid">
            {projects.map(({title, link, color, lightColor, description}) => {
              return <ContentBox
                title={title}
                link={link}
                color={color}
                textColor={lightColor}
                description={description} />
            })}
          </div>
        </div>
        {!!blogPosts && blogPosts.length > 0 && (
          <div>
            <Heading large>Writing</Heading>
            <div className="grid">
              {blogPosts.map(({title, link, date, color, description}) => {
                return <BlogPostRow
                  title={title}
                  description={description}
                  link={link}
                  date={date}
                  color={color} />
              })}
            </div>
          </div>
        )}
        <div>
          <Heading large>Inspiration from around the web</Heading>
          <div className="grid">
            {links.map(({title, link, date, color, lightColor, description}) => {
              return <BlogPostRow
                title={title}
                description={description}
                link={link}
                date={date}
                descriptionColor={lightColor}
                color={color} />
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
