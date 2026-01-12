import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Lori Keller',
    text: "McMains Roofing is the best! They beat the other bids I got by far. They are an honest company that truly cares about their customers. I had an extremely difficult roofing job but they took care of everything and my new roof is beautiful! They used top of the line shingles and materials too! Pat is so nice and always available to answer any questions. I highly recommend this company to anyone that needs a new roof. I can't thank them enough for all that they did! They are amazing!",
    rating: 5,
  },
  {
    id: '2',
    name: 'Diane Bloom',
    text: 'We use McMains Roofing for all of our new construction roofing and they are an exceptional company. They are always on time, complete the job in a timely fashion and do EXCELLENT work. I never worry about them getting the job done and done right. I am thrilled to have found them!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Billie Spingola',
    text: "McMains Roofing has never let us down whether a large job or small. They are professional, courteous and prompt. For our own business needs to family and friends looking for referrals for affordable, dependable roofing. We have yet to hear a complaint about McMains from all the people we have sent their way. I really can't say enough of how much we appreciate Steve and the crew.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Angela Salinas',
    text: 'I love my new roof....they did excellent job at a fair price. Not overpriced like the many others I had quotes from. Im ready for the wind storms this winter!!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Curtis Lacrosse Auction',
    text: 'We had several bids from various companies. We were impressed with the timely and clear responses we received from McMains. Every email I sent was returned within hours regardless of the time of day, which is almost unheard of these days. We found this company to be the most honest and forthcoming of all the businesses we were considering and that spoke volumes to us. We discussed several options and felt the company representatives listened and made recommendations that were sound. It was clear they wanted to do quality work, and were not out to make a quick buck by pushing needless and confusing additions. Thank you, McMains! We are happy with the work; our roof looks great and we would highly recommend you!',
    rating: 5,
  },
  {
    id: '6',
    name: 'R Arnett',
    text: "McMain's did an amazing job on my roof. I got 5 bids and theirs was one of the most reasonable. They were very efficient, hard working & cleaned up all debris. I highly recommend them & will use them in the future.",
    rating: 5,
  },
  {
    id: '7',
    name: 'Robert "Doc" Hansen',
    text: 'Very profession and reasonably priced. Received 5 bids and with one being almost twice the bid I received from McCain. Was wary at first because of the bid. They performed the job at the time promised and even corrected some roof problems not on the contract. Am very happy with my new roof. I recommend them for roofing issues.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Reinout',
    text: "We used McMains after they were referred to us but if they were not we would still have used them. We needed, what we thought, was a simple shingle replacement and some gutters but after a thorough inspection they confirmed what other roofing companies had also confirmed: the sheeting was in poor shape. We received a bid after only a day or two and they came in well under any other bid and they were going to do more work. I compared the bids we received and it was apples to apples when it came to the materials. Not only that the crew was communicative, ontime, and clean! With 4 dogs we didn't want to risk any nails and the McMains crew was white-glove! On top of that a bird's nest with babies was discovered and what did the foreman do? He stopped work, relocated the nest, texted me where it was, let the parents find it, then recommenced the work. Incredible!",
    rating: 5,
  },
];

const styles = `
  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% - 24px));
    }
  }

  .carousel-container {
    overflow: hidden;
    position: relative;
  }

  .carousel-track {
    display: flex;
    gap: 24px;
    animation: slideLeft 20s linear infinite;
  }

  .carousel-track:hover {
    animation-play-state: paused;
  }

  .review-card {
    flex: 0 0 calc(25% - 18px);
    min-width: 300px;
  }

  @media (max-width: 1024px) {
    .review-card {
      flex: 0 0 calc(50% - 12px);
      min-width: 280px;
    }
  }

  @media (max-width: 768px) {
    .review-card {
      flex: 0 0 100%;
      min-width: 100%;
    }

    .carousel-track {
      animation: slideLeft 17s linear infinite;
    }
  }
`;

export default function Reviews() {
  const displayReviews = [...reviewsData, ...reviewsData];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
      <style>{styles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">OUR REVIEWS</h2>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
              alt="Google"
              className="h-6"
            />
            <div className="flex items-center space-x-1">
              <span className="text-3xl font-bold text-white">4.6</span>
              <div className="flex space-x-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F1C40F" color="#F1C40F" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">Based on 70+ Google Reviews</p>
        </div>

        <div className="carousel-container mb-12">
          <div className="carousel-track">
            {displayReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="review-card bg-white rounded-lg p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F1C40F" color="#F1C40F" />
                    ))}
                  </div>
                  <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
                    alt="Google"
                    className="h-4 opacity-60"
                  />
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-6">{review.text}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#F1C40F] rounded-full flex items-center justify-center">
                    <span className="text-[#0B0B0C] font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=mcmains+roofing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            WRITE US A REVIEW
          </a>
        </div>
      </div>
    </section>
  );
}
