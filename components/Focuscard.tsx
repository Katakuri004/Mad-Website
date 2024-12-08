import { FocusCards } from "@/components/ui/focus-cards";
export default function FocusCardsBanner() {
  const cards = [
    {
      title: "yapper 1",
      src: "/img/aboutcover1.png",
      description:'Guitarist'
    },
    {
      title: "yapper 2",
      src: "/img/aboutcover2.png",
      description:'Guitarist'
    },
    {
      title: "yapper 3",
      src: "/img/focuscard4.webp",
      description:'Guitarist'
    },
    {
      title: "yapper 4",
      src: "/img/focuscard2.webp",
      description:'Guitarist'
    },
    {
      title: "Raiden Shogun",
      src: "/img/focuscard3.webp",
      description:'FUCKING GOAT'
    },
    {
      title: "yapper 6",
      src: "/img/focuscard1.webp",
      description:'Guitarist'
    },
  ];

  return <FocusCards cards={cards} />;
}
