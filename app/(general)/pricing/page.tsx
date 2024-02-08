import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'This is the Pricing page',
    keywords: ['Pricing Page', 'Plans', 'Discount', '...']
   };

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
}