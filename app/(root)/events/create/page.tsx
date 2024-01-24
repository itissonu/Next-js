import EventForm from '@/components/sharedcomponents/EventForm'
import { auth } from '@clerk/nextjs';
import React from 'react'

const createEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  console.log(userId)
  return (
    <>
    <section>
      <h3 className='h3-bold text-center sm:text-left wrapper md:py-10 py-5 bg-primary-50'>
        create
      </h3>
    </section>
    <div className='wrapper my-8'>
    <EventForm userId={userId} type="Create"/>
    </div>
    </>
  )
}

export default createEvent