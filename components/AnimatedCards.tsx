import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "This is a sample quote for the testimonial.This is a sample quote for the testimonial.This is a sample quote for the testimonial.This is a sample quote for the testimonial.This is a sample quote for the testimonial.This is a sample quote for the testimonial.This is a sample quote for the testimonial.",
      name: "Mister ABC XYZ",
      designation: "President",
      src: "/img/parallax10.png", // Main card image
      gallery: [
        "/img/parallax10.png", // Carousel images
        "/img/parallax7.jpg",
        "/img/parallax8.webp",
      ],
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
