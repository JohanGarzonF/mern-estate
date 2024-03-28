import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css/bundle'

export const Listing = () => {
  const params = useParams()
  SwiperCore.use([Navigation])
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true)
        setError(false)
        const listingId = params.listingId
        const res = await fetch(`/api/listing/get/${listingId}`)
        const data = await res.json()
        if (data.success === false) {
          setLoading(false)
          setError(true)
          return
        }
        setLoading(false)
        setError(false)
        setListing(data)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchListing()
  }, [params.listingId])

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <Swiper navigation>
          {
            listing.imageUrls.map(url => (
              <SwiperSlide key={url}>
                <div className='h-[550px]' style={{background: `url(${url}) center no-repeat`, backgroundSize: 'cover'}}></div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      )}
    </main>
  )
}