import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'This is the Contact page',
    keywords: ['Contact Page', 'Cómo llegar', 'e-mail', '...']
   };

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
}