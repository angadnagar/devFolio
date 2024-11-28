import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from 'lucide-react'

const projects = [
  {
    title: "SpendWise",
    description: "SpendWise is a full-stack expense tracker that helps users manage finances for smarter spending.",
    image: "https://i0.wp.com/www.invoiceberry.com/blog/wp-content/uploads/2020/04/spendwise_dashboard_view.png?w=1200&ssl=1",
    tags: ["React", "TypeScript","Node","Expressjs", "Tailwind CSS","PostgreSQL","Docker"],
    githubUrl: "https://github.com/angadnagar/SpendWise",
  },
  {
    title: "TechGrow",
    description: "A brief description of your second project",
    image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React","JavaScript", "Node.js", "Express","MongoDB","TailwindCSS"],
    githubUrl: "https://github.com/angadnagar/TechGrow",
  },
  {
    title: "Payment Application Interface",
    description: "A seamless payment application interface website designed for secure transactions and an intuitive user experience",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBheW1lbnQlMjBhcHBsaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React","TypeScript", "Node.js", "Express","PostgreSQL","TailwindCSS"],
    githubUrl: "https://github.com/angadnagar/PayTM-Payment-Application",
  },
  {
    title: "Admin Dashboard",
    description: "A seamless payment application interface website designed for secure transactions and an intuitive user experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React","JavaScript", "Node.js", "Express","TailwindCSS"],
    githubUrl: "https://github.com/angadnagar/ReactAdminDashboard",
  },

]

export default function Projects() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#14213D]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#FFFFFF]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-[#FCA311] bg-[#E5E5E5] hover:bg-[#E5E5E5]/90 transition-colors">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-[#14213D]">{project.title}</CardTitle>
              <CardDescription className="text-[#14213D]/80">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-[#FCA311] text-[#14213D]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              
              <Button variant="outline" size="sm" asChild className="border-[#14213D] text-[#14213D] items-center hover:bg-[#14213D] hover:text-[#FFFFFF]">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

