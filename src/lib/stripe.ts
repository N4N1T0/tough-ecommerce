import Stripe from 'stripe'

export async function checkout ({ items }: { items: Array<{ price: string, quantity: number }> }) {
  const stripe = new Stripe('sk_test_51O9dF5A6xJVXOT92J2ENOw3WYXlvRkUNUte0eBmqfyvxAcESFh3MQHJeBo5DLlP7YxRlXFzu8KTEDmUURLDaB7YQ004JQvRgv4')
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    line_items: [
      ...items
    ]
  })
  window.location.href = session.url!
}