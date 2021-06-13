import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cookiesswap.org',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms (Coming soon)',
    icon: 'FarmIcon',
    href: '/#',
  },
  {
    label: 'Nests (Coming soon)',
    icon: 'PoolIcon',
    href: '/#',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x030839000f297a1471f83b568eeb51c10afeeefe',
      },
      {
        label: 'CoinGecko',
        href: '#',
      },
      {
        label: 'CoinMarketCap',
        href: '#',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Whitepaper',
        href: 'https://cookiesswap.org/files/cookiesswap.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/cookiesswap/',
      },
    ],
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/cookiesswap',
  },
]

export default config
