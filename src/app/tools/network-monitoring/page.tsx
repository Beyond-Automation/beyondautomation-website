import React from 'react';
import { Metadata } from 'next';
import { NetworkGearCard } from '@/components/NetworkGearCard';

export const metadata: Metadata = {
  title: 'Network Monitoring Gear Recommendations | Beyond Automation',
  description: 'Senior IT engineer picks for network monitoring hardware: managed switches, PoE switches, cable testers, patch panels, and SFP+ cables. Gear we actually rack.',
  openGraph: {
    title: 'Network Monitoring Gear Recommendations',
    description: 'Hardware picks from engineers who actually rack this stuff.',
    type: 'website',
  },
};

const GEAR_RECOMMENDATIONS = [
  {
    title: 'Netgear GS308E 8-Port Managed Switch',
    category: 'Managed Switch',
    amazonUrl: 'https://www.amazon.com/dp/B07PLFCQVK?tag=beyondauto-20',
    amazonAsin: 'B07PLFCQVK',
    priceRange: '$35-45',
    description: 'Compact 8-port gigabit switch with VLAN support, QoS, and IGMP snooping. Web-managed interface that doesn\'t require a PhD to configure.',
    whoNeedsIt: 'Home labs, small office deployments, or anyone who needs basic network segmentation without enterprise pricing.',
    whyThisPick: 'Best bang for buck in the prosumer managed switch space. Fanless, reliable, and the Plus/Smart Managed feature set covers 90% of use cases. I\'ve deployed dozens of these in client closets.',
  },
  {
    title: 'Netgear GS308EP 8-Port PoE+ Managed Switch',
    category: 'PoE Switch',
    amazonUrl: 'https://www.amazon.com/dp/B08LR18SC4?tag=beyondauto-20',
    amazonAsin: 'B08LR18SC4',
    priceRange: '$90-110',
    description: '8-port gigabit PoE+ switch with 62W total power budget. Powers cameras, access points, and VoIP phones from a single cable run.',
    whoNeedsIt: 'Anyone deploying wireless APs, IP cameras, or VoIP phones. Eliminates wall wart chaos and simplifies cable management.',
    whyThisPick: 'The 62W budget handles 4 Ubiquiti APs or 8 IP phones comfortably. Same reliable Plus Managed platform as the GS308E. Skip the 4-port modelsâyou\'ll outgrow them in 6 months.',
  },
  {
    title: 'Klein Tools VDV501-851 Cable Tester Kit',
    category: 'Cable Tester',
    amazonUrl: 'https://www.amazon.com/dp/B08GFL2LCZ?tag=beyondauto-20',
    amazonAsin: 'B08GFL2LCZ',
    priceRange: '$80-100',
    description: 'Tests RJ45 and coax, identifies shorts/opens/miswires, includes tone generator and probe for tracing cables through walls.',
    whoNeedsIt: 'Anyone who terminates their own cables, inherits undocumented infrastructure, or troubleshoots intermittent connectivity.',
    whyThisPick: 'Klein is the electrician\'s standard for a reason. The Scout Pro series is built to survive drops, the UI is dead simple, and the tone generator actually penetrates drywall. Fluke is better but 3x the price.',
  },
  {
    title: 'Cable Matters 24-Port Cat6 Patch Panel',
    category: 'Patch Panel',
    amazonUrl: 'https://www.amazon.com/dp/B0072JVT02?tag=beyondauto-20',
    amazonAsin: 'B0072JVT02',
    priceRange: '$25-35',
    description: 'Standard 19" 1U rackmount patch panel with numbered ports. Keystone-compatible, works with Cat5e/Cat6/Cat6a.',
    whoNeedsIt: 'Any structured cabling deployment. Home labs, server closets, MDFsâif you\'re running more than 4 drops, use a patch panel.',
    whyThisPick: 'Cheap, sturdy, and the keystones punch down clean. I\'ve used these in production environments with zero issues. Don\'t overthink patch panelsâthis one works.',
  },
  {
    title: '10Gtek SFP+ DAC Cable 3m',
    category: 'SFP+ Cable',
    amazonUrl: 'https://www.amazon.com/dp/B00WHS3NCA?tag=beyondauto-20',
    amazonAsin: 'B00WHS3NCA',
    priceRange: '$15-25',
    description: 'Direct attach copper cable for 10GbE connections between switches and servers. 3 meter length, passive, low latency.',
    whoNeedsIt: 'Lab environments, storage networks, or anyone connecting 10Gb devices within the same rack or adjacent racks.',
    whyThisPick: 'DACs are cheaper, lower latency, and more reliable than SFP+ transceivers with fiber for short runs. 10Gtek cables work fine in Ubiquiti, Mikrotik, and most Cisco gear. Save the fiber budget for long runs.',
  },
];

export default function NetworkMonitoringPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-mono text-emerald-500 uppercase tracking-wider">
            Tools &amp; Gear
          </span>
          <h1 className="text-4xl font-bold text-zinc-100 mt-2 mb-4">
            Network Monitoring Gear
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Hardware picks from someone who&apos;s actually racked this stuff. No affiliate-bait roundupsâjust the gear I reach for when building out monitoring infrastructure.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mb-12 p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
          <p className="text-sm text-zinc-500">
            <span className="font-medium text-zinc-400">Disclosure:</span> Links below are Amazon Associates affiliate links. I earn a small commission if you buy through themâat no extra cost to you. I only recommend gear I&apos;ve personally used or would deploy in production.
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-6">
          {GEAR_RECOMMENDATIONS.map((gear) => (
            <NetworkGearCard
              key={gear.amazonAsin}
              title={gear.title}
              category={gear.category}
              amazonUrl={gear.amazonUrl}
              amazonAsin={gear.amazonAsin}
              priceRange={gear.priceRange}
              description={gear.description}
              whoNeedsIt={gear.whoNeedsIt}
              whyThisPick={gear.whyThisPick}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">
            A note on monitoring software
          </h2>
          <p className="text-zinc-400">
            This page covers physical gear. For network monitoring software (SNMP polling, flow analysis, alerting), we&apos;re evaluating partnerships with vendors like Auvik and NinjaOne. Check backâor subscribe to the newsletterâfor software recommendations when those go live.
          </p>
        </div>
      </div>
    </main>
  );
}
