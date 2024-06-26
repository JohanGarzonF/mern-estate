import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null)
  const [message, setMessage] = useState('')

  const onChange = e => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    const fetchLanlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`)
        const data = await res.json()
        if (data.success === false) {
          console.log(data.message)
        }
        setLandlord(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLanlord()
  }, [listing.userRef])
  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            onChange={onChange}
            name='message'
            id='message'
            rows='2'
            value={message}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  )
}
