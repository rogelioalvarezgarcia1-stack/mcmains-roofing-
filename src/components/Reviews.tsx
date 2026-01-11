import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

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
    animation: slideLeft 25s linear infinite;
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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setReviews(data || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const displayReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
      <style>{styles}</style>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">OUR REVIEWS</h2>

        {isLoading ? (
          <div className="text-center text-white py-12">Loading reviews...</div>
        ) : reviews.length > 0 ? (
          <div className="carousel-container mb-12">
            <div className="carousel-track">
              {displayReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="review-card bg-white rounded-lg p-6 shadow-xl"
                >
                  <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#F1C40F" color="#F1C40F" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{review.text}</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-white py-12">No reviews yet</div>
        )}

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
