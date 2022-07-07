<script lang="ts">
  import {
    faAddressBook,
    faCalendarDay,
    faCartFlatbedSuitcase,
    faClone,
    faCube,
    faGrip,
    faMoneyBillTransfer,
    faPeopleGroup,
    faSwatchbook,
    faWineGlassEmpty,
  } from '@fortawesome/free-solid-svg-icons';
  import Logo from './Logo.svelte';
  import NavMenu from './NavMenu.svelte';
  import type { MenuItem } from './NavMenu.svelte';
  import HelpCard from './HelpCard.svelte';

  const mainMenuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: faGrip,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Transactions',
      icon: faMoneyBillTransfer,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Contacts',
      icon: faPeopleGroup,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Features',
      icon: faCartFlatbedSuitcase,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Library',
      icon: faSwatchbook,
      children: null,
    },
  ];

  const settingsAndSchedulesMenuItems: MenuItem[] = [
    {
      name: 'Base Wallet',
      icon: faCube,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'My Contacts',
      icon: faAddressBook,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Invoices',
      icon: faClone,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
    {
      name: 'Schedules',
      icon: faCalendarDay,
      children: [
        {
          name: 'Placeholder',
          icon: faWineGlassEmpty,
          children: null,
        },
      ],
    },
  ];
</script>

<nav
  class="relative flex h-full w-80 flex-col gap-20 border-r-2 border-lilac-200 bg-lilac-100 px-7 py-10"
>
  <div class="flex items-center gap-3">
    <span class="w-6"><Logo /></span>
    <strong class="font-bold text-lg text-lilac-800">Super Fini</strong>
  </div>
  <NavMenu name="Main Navigation" items={mainMenuItems} />
  <NavMenu name="Settings & Schedules" items={settingsAndSchedulesMenuItems} />
  <div class="flex grow flex-col justify-end"><HelpCard /></div>
  <div class="absolute top-0 left-0 h-full w-full overflow-hidden">
    <div
      class="absolute -bottom-52 -left-2 h-80 w-80 rounded-full bg-ghost-white opacity-60 shadow-[0_5px_20px_5px_rgba(0,0,0,0.1)]"
    />
    <div
      class="absolute -bottom-52 -left-20 h-80 w-80 rounded-full bg-ghost-white opacity-60 shadow-[0_5px_20px_5px_rgba(0,0,0,0.1)]"
    />
    <div
      class="absolute -bottom-32 left-16 h-36 w-36 rounded-full bg-ghost-white opacity-60 shadow-[0_5px_20px_5px_rgba(0,0,0,0.1)]"
    />
  </div>
</nav>
