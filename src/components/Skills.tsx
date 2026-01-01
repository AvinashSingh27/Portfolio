import { Cloud, GitBranch, Database, Code, Server, Shield, Box, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Azure Services',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Azure App Services', level: 95 },
        { name: 'Azure Functions', level: 90 },
        { name: 'Azure Kubernetes (AKS)', level: 88 },
        { name: 'Azure DevOps', level: 92 },
        { name: 'Azure SQL Database', level: 90 },
        { name: 'Azure Cosmos DB', level: 85 },
        { name: 'Azure Storage', level: 93 },
        { name: 'Azure Service Bus', level: 87 }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-violet-500 to-purple-600',
      skills: [
        { name: 'Azure Cognitive Services', level: 85 },
        { name: 'Azure OpenAI', level:  83 },
        { name: 'Speech', level: 80 }
      ]
    },
    {
      category: 'DevOps & IaC',
      icon: GitBranch,
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'Azure DevOps Pipelines', level: 90 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 }
      ]
    },
    {
      category: 'Programming & Frameworks',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'C#/.NET Core', level: 92 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'Python', level: 90 },
        { name: 'ASP.NET Core', level: 90 }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'Azure SQL', level: 90 },
        { name: 'Cosmos DB', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis Cache', level: 85 }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      skills: [
        { name: 'Azure AD / Entra ID', level: 88 },
        { name: 'OAuth 2.0 / OIDC', level: 87 },
        { name: 'Azure Key Vault', level: 90 },
        { name: 'Security Best Practices', level: 92 }
      ]
    },
    {
      category: 'Monitoring & Observability',
      icon: Server,
      color: 'from-yellow-500 to-orange-600',
      skills: [
        { name: 'Azure Monitor', level: 88 },
        { name: 'Application Insights', level: 90 },
        { name: 'Log Analytics', level: 87 },
        { name: 'metrices', level: 85 }
      ]
    },
    {
      category: 'Containerization',
      icon: Box,
      color: 'from-sky-500 to-cyan-600',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Azure Container Instances', level: 88 },
        { name: 'Azure Container Registry', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Microservices', level: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill set across cloud architecture, DevOps, AI/ML, and modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[280px]">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold text-xl mb-2">AZ-204</h4>
                <p className="text-blue-100">Developing Solutions for Microsoft Azure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[280px]">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-xl mb-2">Azure DevOps Expert</h4>
                <p className="text-blue-100">CI/CD & Infrastructure Automation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[280px]">
                <div className="text-4xl mb-3">🔐</div>
                <h4 className="font-bold text-xl mb-2">HIPAA Certified</h4>
                <p className="text-blue-100">Healthcare Data Security & Compliance</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;