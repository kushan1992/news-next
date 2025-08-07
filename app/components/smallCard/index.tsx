import Image from 'next/image'

interface ISmallCard {
  id: string
  image: string
  headline: string
  url: string
}

export default function SmallCard(smallCardProps: ISmallCard) {
  const { id, image, headline, url } = smallCardProps
  return (
    <div className="rounded overflow-hidden shadow-lg">
      {image ? (
        <Image
          src={image}
          alt={headline}
          width={300}
          height={200}
          className="w-full"
        />
      ) : (
        <Image
          src="/no-image.jpg"
          alt="Default Image"
          width={300}
          height={200}
          className="w-full"
        />
      )}

      <div className="py-4">
        <h3 className="text-sm font-semibold mb-2 font-roboto">{headline}</h3>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="flex items-center text-sm pt-4 font-light">
            <span className="underline underline-offset-8 font-roboto ">
              Read Article
            </span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pb-1"
            >
              <circle cx="12.9804" cy="12.6591" r="9.5" stroke="white" />
              <path
                d="M10.6947 14.9451L14.9804 10.6594M14.9804 10.6594H9.98044M14.9804 10.6594V15.6594"
                stroke="white"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
