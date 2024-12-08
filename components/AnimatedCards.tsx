import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
        quote:
          "  quote ",
        name: " name here",
        designation: " designation here",
        src: "/img/parallax10.png",
      },
    {
      quote:
        " ",
      name: "Vice President name",
      designation: "Vice President ",
      src: "/img/aboutcover6.png",
    },
    {
      quote:
        " ",
      name: " ",
      designation: " ",
      src: "/img/aboutcover5.png",
    },
    {
      quote:
        " ",
      name: " ",
      designation: " ",
      src: "/img/card2.jpg",
    },
    {
      quote:
        " ",
      name: " ",
      designation: " ",
      src: "/img/parallax1.jpg",
    },
    {
      quote:
        " ",
      name: " ",
      designation: " ",
      src: "/img/parallax5.webp",
    },
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
