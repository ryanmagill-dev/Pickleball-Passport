'use client';

import Link from 'next/link';
import { DollarSign } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1D2D44] to-[#495F87] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-blue-100">
            Our commitment to fair and transparent refunds
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <DollarSign className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-emerald-800">
                We understand that plans change. Our refund policy is designed to be fair to
                all parties while protecting our ability to deliver exceptional experiences.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> October 2026. This page summarizes the cancellation
              terms in our <Link href="/terms" className="text-[#1D2D44] hover:underline">Terms of Service</Link>,
              which take precedence if anything differs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Payment
            </h2>
            <p className="text-gray-600 mb-4">
              All prices are in US dollars. Payment in full confirms your place. We do not
              hold places before payment clears.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cancellation by Guest: Trips
            </h2>
            <p className="text-gray-600 mb-4">
              Multi-day hosted trips (accommodation, transfers, and activities). Refunds are based
              on the date we receive your cancellation in writing:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>90 or more days before departure:</strong> full refund, less a $500 per person administration fee</li>
              <li><strong>60 to 89 days:</strong> 50% refund</li>
              <li><strong>30 to 59 days:</strong> 25% refund</li>
              <li><strong>Fewer than 30 days:</strong> no refund</li>
            </ul>
            <p className="text-gray-600 mb-4">
              These terms exist because we pay hotels, airlines, and local operators in advance
              on your behalf, and those payments are not refundable to us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cancellation by Guest: Clinics
            </h2>
            <p className="text-gray-600 mb-4">
              Clinic Week, the Two-Day Pass, and other coaching and court-time products:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>30 or more days before your first session:</strong> full refund</li>
              <li><strong>Fewer than 30 days:</strong> no refund, but you may transfer your place to another player at no charge</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Transfers
            </h2>
            <p className="text-gray-600 mb-4">
              You may transfer a trip booking to another person up to 30 days before departure at
              no charge, subject to our approval of the replacement guest and any supplier
              name-change fees, which you pay.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cancellation by The Pickleball Passport
            </h2>
            <p className="text-gray-600 mb-4">
              In rare circumstances, we may need to cancel or modify your booking due to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Venue or activity provider unavailability</li>
              <li>Government travel advisories or restrictions</li>
              <li>Natural disasters or force majeure events</li>
              <li>Minimum guest count not met for group experiences</li>
            </ul>
            <p className="text-gray-600 mb-4">
              If we cancel your booking for any reason other than force majeure, you receive a full
              refund of what you paid us. If a session or departure does not reach its minimum
              number, you may move to another available date or take a full refund of the affected
              portion.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Add-On &amp; Activity Refunds
            </h2>
            <p className="text-gray-600 mb-4">
              Add-on activities and services have specific refund terms:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Deposits paid directly to third-party providers may have separate refund policies</li>
              <li>If an activity is cancelled due to weather or availability, fees will be refunded</li>
              <li>No refunds for activities and services already delivered</li>
              <li>Additional services requested during your stay are non-refundable once delivered</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Non-Refundable Items
            </h2>
            <p className="text-gray-600 mb-4">
              The following are generally non-refundable:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Airfare purchased through third parties</li>
              <li>Travel insurance premiums</li>
              <li>Visa application fees</li>
              <li>Services already rendered</li>
              <li>Custom or personalized items</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Travel Insurance
            </h2>
            <p className="text-gray-600 mb-4">
              We strongly recommend purchasing comprehensive travel insurance that includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Trip cancellation and interruption coverage</li>
              <li>Medical coverage abroad</li>
              <li>Emergency evacuation coverage</li>
              <li>&ldquo;Cancel for any reason&rdquo; coverage (if available)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Request a Refund
            </h2>
            <p className="text-gray-600 mb-4">
              To request a refund or discuss your options:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 mb-4 space-y-2">
              <li>Email us at <a href="mailto:support@thepickleballpassport.org" className="text-[#1D2D44] hover:underline">support@thepickleballpassport.org</a></li>
              <li>Include your booking confirmation number</li>
              <li>Explain your reason for cancellation</li>
              <li>Our team will respond within 2 business days</li>
            </ol>
            <p className="text-gray-600 mb-4">
              Approved refunds are processed within 10-14 business days to your original payment method.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              Questions about our refund policy? Contact our support team at{' '}
              <a href="mailto:support@thepickleballpassport.org" className="text-[#1D2D44] hover:underline">
                support@thepickleballpassport.org
              </a>{' '}
              or call +1 512-564-8522.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-[#1D2D44] hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
