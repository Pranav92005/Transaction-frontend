/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5UXtYCEyPXb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link } from "react-router-dom"
import {Button} from "../components/Button"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="ml-2 text-lg font-semibold">Acme Transactions</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Link to={'/signup'}><Button label={"Get Started"} ></Button></Link>
          
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="mx-4 space-y-6 text-center md:mx-6 md:max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Streamline Your Transactions with Acme
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Acme Transactions is a powerful platform that simplifies your financial management. Securely track,
              analyze, and optimize your transactions with ease.
            </p>
            <Link to={'/signup'}> <Button className="text-lg" label={"Get Started"}></Button></Link>
           
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Effortless Transaction Management
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Acme Transactions provides a user-friendly interface to seamlessly manage your financial transactions.
                Track income, expenses, and budgets with precision.
              </p>
              <Button variant="outline" label={"Learn More"}></Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Powerful Insights and Analytics
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Gain valuable insights into your financial health with our robust analytics tools. Visualize your
                spending patterns, identify opportunities for savings, and make informed decisions.
              </p>
              <Button variant="outline" label={"Learn More"}></Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 md:py-24 lg:py-32">
          <div className="mx-4 space-y-6 text-center md:mx-6 md:max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Take Control of Your Finances with Acme
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Experience the power of Acme Transactions and transform the way you manage your financial life. Get
              started today and unlock a world of financial freedom.
            </p>
            <Button className="text-lg" label={"Get Started"}></Button>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:p-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div className="space-y-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Product</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Integrations
            </Link>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Support</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Status
            </Link>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 Acme Transactions. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}