import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Globe, Zap,Database,HardDrive,MonitorCog,CodeXml,Github,Container,Network,Cloud } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Expertise in React, Next.js, modern JavaScript and TypeScript",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces",
  },
  {
    icon: Globe,
    title: "Responsive Web Design",
    description: "Building websites that work seamlessly across all devices",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast load times and smooth user experiences",
  },
  {
    icon: HardDrive,
    title: "Backend Development",
    description: "Expertise in Nodejs, Expressjs, and Hono",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Expertise in MongoDB and PostgreSQL",
  },
  {
    icon: MonitorCog,
    title: "Linux",
    description: "Expertise in Linux ensures robust system performance and seamless user interactions",
  },
  {
    icon: CodeXml,
    title: "C++",
    description: " Proficiency in C++ ensures efficient code execution and high-performance applications",
  },
  {
    icon: Github,
    title: "Version Control",
    description: " Expertise in Git and GitHub ensures efficient version control and seamless collaboration",
  },
  {
    icon: Container,
    title: "Containarization",
    description: " Proficiency in Docker ensures streamlined containerization and efficient application deployment",
  },
  {
    icon: Network,
    title: "Computer Networking",
    description: " Expertise in Computer Networks ensures reliable connectivity and optimized data communication"
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    description: " Proficiency in AWS Cloud EC2 ensures scalable computing power and efficient resource management",
  },
  
  
  
]

export default function Skills() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#E5E5E5]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#14213D]">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="border-[#FCA311] bg-[#14213D] hover:bg-[#14213D]/90 transition-colors">
            <CardHeader>
              <skill.icon className="h-8 w-8 text-[#FCA311] mb-2" />
              <CardTitle className="text-[#FFFFFF]">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#E5E5E5]">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

