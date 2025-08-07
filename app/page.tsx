import LargeCard from './components/largeCard'
import SmallCard from './components/smallCard'

interface News {
  id: string
  image: string
  headline: string
  url: string
}

export default async function Home() {
  const loadNews = async () => {
    const response = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${process.env.FINNHUB_KEY}`
    )
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `API error: ${response.status} - ${errorData.message || 'Unknown error'}`
      )
    }
    return response.json()
  }

  const news = await loadNews()
  const featuredNews = news.slice(0, 3)
  const regularNews = news.slice(3, 10)

  const renderNewsCards = () =>
    regularNews
      .slice(0, 10)
      .map((data: News) => (
        <SmallCard
          key={data.id}
          id={data.id}
          image={data.image}
          headline={data.headline}
          url={data.url}
        />
      ))

  return (
    <div>
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {featuredNews.map((data: News, idx: number) =>
          idx === 0 ? (
            <LargeCard
              key={data.id}
              id={data.id}
              image={data.image}
              headline={data.headline}
              url={data.url}
            />
          ) : (
            <SmallCard
              key={data.id}
              id={data.id}
              image={data.image}
              headline={data.headline}
              url={data.url}
            />
          )
        )}
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-6 mt-6">
        {renderNewsCards()}
      </div>

      {/* Small/medium screens */}
      <div className="lg:hidden space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {renderNewsCards()}
        </div>
      </div>
    </div>
  )
}
