import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#E5E5E5]">
      <Card className="max-w-2xl mx-auto border-[#FCA311] bg-[#14213D]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-[#FFFFFF]">Get in Touch</CardTitle>
          <CardDescription className="text-center text-[#E5E5E5]">
            Have a question or want to work together? Feel free to reach out!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input id="name" placeholder="Name" className="bg-[#E5E5E5] border-[#FCA311] text-[#14213D]" />
                </div>
                <div className="space-y-2">
                  <Input id="email" placeholder="Email" type="email" className="bg-[#E5E5E5] border-[#FCA311] text-[#14213D]" />
                </div>
              </div>
              <div className="space-y-2">
                <Input id="subject" placeholder="Subject" className="bg-[#E5E5E5] border-[#FCA311] text-[#14213D]" />
              </div>
              <div className="space-y-2">
                <Textarea className="min-h-[100px] bg-[#E5E5E5] border-[#FCA311] text-[#14213D]" id="message" placeholder="Your message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#FCA311] hover:bg-[#FCA311]/90 text-[#14213D]">Send Message</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

