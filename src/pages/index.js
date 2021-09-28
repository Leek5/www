import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <div className="divide-y divide-gray-200">
            <Head>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@PaperCoreDev" />
              <meta name="twitter:creator" content="@PaperCoreDev" />
              <meta name="twitter:title" content="블로그 - 리크봇" />
              <meta name="twitter:description" content="리크봇의 새로운 소식을 전해줘요" />
              <meta name="twitter:image" content={`https://leeklog.pcor.me${twitterCard}`} />
              <meta property="og:url" content="https://leeklog.pcor.me" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="블로그 - 리크봇" />
              <meta property="og:description" content="리크봇의 새로운 소식을 전해줘요" />
              <meta property="og:image" content={`https://leeklog.pcor.me${twitterCard}`} />
              <title>블로그 - 리크봇</title>
              <meta name="description" content="리크봇의 새로운 소식을 전해줘요" />
            </Head>
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                새로운 소식
              </h1>
              <p className="text-lg text-gray-500">
                올라오자마자 적용되는 새로운 소식들이에요.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="py-12">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">작성일시</dt>
                        <dd className="text-base font-medium text-gray-500">
                          <time dateTime={meta.date}>
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold tracking-tight">
                            <Link href={link}>
                              <a className="text-gray-900">{meta.title}</a>
                            </Link>
                          </h2>
                          <div className="prose max-w-none text-gray-500">
                            <Component />
                          </div>
                        </div>
                        <div className="text-base font-medium">
                          <Link href={link}>
                            <a
                              className="text-teal-600 hover:text-teal-700"
                              aria-label={`Read "${meta.title}"`}
                            >
                              더 읽기 &rarr;
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
