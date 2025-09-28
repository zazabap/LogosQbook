// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
    ],
  },
  {
    title: "Modules",
    href: "/modules",
    noLink: true,
    items: [
      { title: "State", href: "/State" },
      { title: "Gate", href: "/Gate" },
      { title: "Circuit", href: "/Circuit" },
    ],
  },
  {
    title: "Tutorial",
    href: "/tutorial",
    noLink: true,
    items: [
      { title: "State", href: "/State" },
      { title: "Gate", href: "/Gate" ,
        items: [
          { title: "Single Qubit Gates", href: "/single-qubit-gate" },
          { title: "Two Qubit Gates", href: "/two-qubit-gate" },
        ]
      },
      // { title: "Circuit", href: "/Circuit"
      // },
      { title: "QFT", href: "/QFT" },
    ],
  },
]

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
