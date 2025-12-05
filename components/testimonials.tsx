import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Freight Hunt has transformed how we manage our supply chain. Their carrier network and responsive team make shipping effortless.",
    role: "Logistics Director",
    rating: 5,
  },
  {
    content:
      "As an owner-operator, finding quality loads is crucial. Freight Hunt delivers consistently with fair rates and quick payment.",
    role: "Owner-Operator",
    rating: 5,
  },
  {
    content:
      "The transparency and communication from Freight Hunt is unmatched. We always know where our freight is and when it will arrive.",
    role: "Supply Chain Manager",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            Trusted by Shippers & Carriers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our partners have to say about working with Freight Hunt.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
