import React from 'react'

import {
  IconSquaresFour,
  IconHouse,
  IconTreeStructure,
  IconShoppingCartSimple,
  IconTag,
  IconMegaphone,
  IconActivity,
  IconPackage,
  IconLayout,
  IconArrowUp,
  IconQuestion,
  IconBell,
  IconArrowUUpLeft,
  Topbar, TopbarStart, TopbarEnd,Box,
  Set,
  Button,
  Text,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarSection,
  SidebarSectionItem,
  useSidebarState,
} from '@vtex/admin-ui'


const top = [
  {
    icon: <IconHouse />,
    onClick: () => console.log('Click me'),
    label: 'Home',
    sections: [],
  },
  {
    icon: <IconShoppingCartSimple />,
    onClick: () => console.log('Click me'),
    label: 'Orders',
    sections: [
      {
        title: 'Orders',
        subItems: [
          'All Orders',
          'Subscriptions',
          'Transactions',
          'Bank Conciliation',
        ],
      },
    ],
  },
  {
    icon: <IconTag />,
    onClick: () => console.log('Click me'),
    label: 'Products',
    sections: [
      {
        title: 'Discounts',
        subItems: [
          'All Products',
          'Categories',
          'Brands',
          'Collections',
          'List Types',
          'Inventory',
          'Custom Fields',
          'Import and Export',
          'Reviews',
          'Reports',
        ],
      },
      { title: 'Prices', subItems: ['Price List', 'Price Rules'] },
    ],
  },
  {
    icon: <IconMegaphone />,
    onClick: () => console.log('Click me'),
    label: 'Promotions',
    sections: [
      {
        title: 'Promotions',
        subItems: [
          'Promotions',
          'Coupons',
          'Campaign Audience',
          'Gift Cards',
          'Taxes',
        ],
      },
    ],
  },
  {
    icon: <IconLayout />,
    onClick: () => console.log('Click me'),
    label: 'Storefront',
    sections: [
      {
        subItems: ['Layout', 'Site Editor', 'Pages', 'Styles', 'Banners'],
        title: 'Intelligent Search',
      },
    ],
  },
  {
    icon: <IconPackage />,
    onClick: () => console.log('Click me'),
    label: 'Shipping',
    sections: [
      {
        title: 'Shipping',
        subItems: [
          'Shipping Rates',
          'Shipping Simulator',
          'Pickup Points',
          'Shipping Strategy',
        ],
      },
    ],
  },
  {
    icon: <IconTreeStructure />,
    onClick: () => console.log('Click me'),
    label: 'Marketplace',
    sections: [],
  },
]

const bottom = [
  {
    icon: <IconSquaresFour />,
    onClick: () => console.log('Click me'),
    label: 'App Store',
    sections: [],
  },
  {
    icon: <IconActivity />,
    onClick: () => console.log('Click me'),
    label: 'Settings',
    sections: [],
  },
]

function App() {
  const state = useSidebarState()

  return (
    <Box
      csx={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
      }}
      data-testid="container-shell"
    >
      <Topbar>
        <TopbarStart>
          <Set spacing={3}>
            <Button variant="adaptative-dark" icon={<IconActivity />} />
            <Text>dpsppinheiros</Text>
          </Set>
        </TopbarStart>
        <TopbarEnd>
          <Set spacing={0}>
            <Button variant="tertiary" icon={<IconArrowUUpLeft />}>
              Switch to previous version
            </Button>
            <Button
              variant="tertiary"
              icon={<IconArrowUp csx={{ transform: `rotate(45deg)` }} />}
            >
              View Store
            </Button>
            <Button variant="tertiary" icon={<IconBell />} />
            <Button variant="tertiary" icon={<IconQuestion />} />
          </Set>
        </TopbarEnd>
      </Topbar>
      <Box
        csx={{
          display: 'flex',
          flexDirection: 'row',
          height: 'auto',
          minHeight: 'calc(100vh - 3.5rem)',
          overflow: 'hidden',
        }}
      >
        <Sidebar id="Sidebar" loading={false} state={state}>
          <SidebarGroup>
            {top.map((item, index) => (
              <SidebarItem
                label={item.label}
                uniqueKey={item.label}
                icon={item.icon}
                key={item.label}
                selected={index === 0}
              >
                {item.sections.map((section) => (
                  <SidebarSection title={section.title} key={section.title}>
                    {section.subItems.map((label) => (
                      <SidebarSectionItem key={label}>
                        {label}
                      </SidebarSectionItem>
                    ))}
                  </SidebarSection>
                ))}
              </SidebarItem>
            ))}
          </SidebarGroup>
          <SidebarGroup>
            {bottom.map((item) => (
              <a href="https://www.google.com.br">
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  uniqueKey={item.label}
                  key={item.label}
                />
              </a>
            ))}
          </SidebarGroup>
        </Sidebar>
      </Box>
    </Box>
  )
}

export default App;
