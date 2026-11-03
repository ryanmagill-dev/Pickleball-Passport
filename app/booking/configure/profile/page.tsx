import { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import ProfileCompletionClient from './profile-client'

export const metadata: Metadata = privatePageMetadata(
  'Complete Your Profile | The Pickleball Passport',
  'Complete your guest profile before finalizing your booking.',
)

export default async function ProfileCompletionPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in?redirect_url=/booking/configure/profile')
  }

  return <ProfileCompletionClient />
}
