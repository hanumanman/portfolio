import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client: string;
  teamSize: number;
  role: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  client,
  teamSize,
  role,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-slate-800 border-slate-700">
      <div className="h-2 bg-slate-600"></div>
      <CardContent className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-slate-300 border-slate-600">
            {client}
          </Badge>
          <Badge
            variant="outline"
            className="text-slate-300 border-slate-600 flex items-center gap-1"
          >
            <Users className="h-3 w-3" />
            {teamSize}+ members
          </Badge>
          <Badge className="bg-slate-700 text-slate-300 hover:bg-slate-600">
            {role}
          </Badge>
        </div>

        <p className="text-slate-300 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-700 text-slate-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
