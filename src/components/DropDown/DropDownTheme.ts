export default {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none text-[--text]",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        auto: "bg-[--bg]",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
    content: "py-1 text-sm text-[--text]",
    divider: "my-1 h-px bg-[--bg]",
    header: "block py-2 px-4 text-sm text-[--text]",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex items-center justify-start py-2 px-4 text-sm text-[--text] cursor-pointer w-full hover:bg-[--bg-minor] focus:bg-[--bg-minor] focus:outline-none",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      light: "border border-gray-200 bg-[--bg] text-[--text]",
      auto: "border border-gray-200 bg-[--bg] text-[--text]",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};
