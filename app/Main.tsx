import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 ml-6">
          <h1 className="text-sm  leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-12  dark:text-gray-100">
            Hey. My name is Tushar.
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-start">
  <div className="max-w-xl text-left p-8 text-gray-500">
    <p className="mb-6">
      I'm a "figure it out as I go" kind of person, embracing getting things done over strategy. Progress over perfection. Journey over the destination.
    </p>
    <p className="mb-6">
      When I'm not writing, you can find me lifting, cycling, practicing yoga, or learning based on my energy levels at that time.
    </p>
    <ul className="list-disc space-y-2 ml-4">
      <li>
        Currently managing content and social media at{' '}
        <a href="https://buildd.co/" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          Buildd
        </a>
      </li>
      <li>
        Previously led marketing at{' '}
        <a href="https://x.com/purplepayapp?s=21&t=blFbEqgYvEn7OKOd5e_F0w" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          Purple Pay
        </a>
      </li>
      <li>
        Previously wrote blogs for{' '}
        <a href="https://www.dezerv.in/" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          Dezerv
        </a>
      </li>
      <li>
        Co-founder of Podcast{' '}
        <a href="https://x.com/podcastdecoded_?s=21&t=blFbEqgYvEn7OKOd5e_F0w" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          Decoded
        </a>
      </li>
      <li>
        Very active on{' '}
        <a href="https://x.com/tushaarmehtaa/status/1738942170357531015?s=46&t=blFbEqgYvEn7OKOd5e_F0w" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </li>
      <li>
        Looking to launch a{' '}
        <a href="https://substack.com/@tusharmehta" className="text-pink-500" target="_blank" rel="noopener noreferrer">
          newsletter
        </a>{' '}
        soon
      </li>
    </ul>
  </div>
</div>
    </>
  )
}
