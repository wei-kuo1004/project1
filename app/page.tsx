import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          危害辨識 <br className="hidden sm:inline" />
          Hazard Identification
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          對於工作環境會有的危險，你認識多少？
        </p>
        <p className="text-muted-foreground max-w-[700px] text-lg">How much do you know about potential hazards in the workplace?</p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          開始挑戰
          Start
        </Link>
      </div>
    </section>
  )
}
